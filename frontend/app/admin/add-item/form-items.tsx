'use client';

import { Plus, X } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image';
import z from 'zod';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { addCars } from '@/app/actions/addcars';
import { toast } from 'sonner';
import { itemsType } from '@/lib/types';
import { schema } from '@/lib/schema';
import { createClient } from '@/utils/supabase/client';



const formSchema = schema.extend({
  colorInput: z.string(),
});

export type formType = z.infer<typeof formSchema>;


// type extendItemsType = Omit<itemsType, 'id'> & {
//   colorInput: string;
//   images: File[];
// };

export default function FormItems() {
    // const [colorOptions, setColorOptions] = useState<string>('');
    const { register, handleSubmit, formState: { errors, isValid }, setValue, getValues, watch } = useForm<formType>({ 
       resolver: zodResolver(formSchema),
       defaultValues: { 
          carName: '',
          dailyRate: 0,
          releaseDate: new Date(),
          steeringType: "Manual",
          doors: 0,
          transmission: "Manual",
          ColorOptions: [],
          colorInput: '',
          images: [],
          features: '',
       }
    })

    console.log('FORMDATA VALUES', getValues());
    
    const supabase = createClient();
    const [images, setImages] = useState<File[]>([]);
    const inputImageRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const { mutate, error, isSuccess, data } = useMutation({
      mutationFn: async (data: formType) =>
        await addCars(data),
      onSuccess: () => {
        toast.success("Car added successfully");
      },
      onError: (err) => {
        toast.error(`Failed to add car: ${err.message}`);
      },
    });


    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files) {
            const newFiles = Array.from(files);
            
            setImages((prev) => {
                const updatedImages = [...prev, ...newFiles];
                if (updatedImages.length > 3) {
                    updatedImages.splice(-1, updatedImages.length - 3);
                }
                return updatedImages;
            });
        }
    }

    console.log('images', getValues("images"));

    const handleUploadImageToCloud = async (): Promise<boolean> => {
      const sanitizeBucketName = (name: string) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '');

      try {
        const uploadPromises = images.map(async (image) =>
          supabase.storage
            .from("car")
            .upload(`${sanitizeBucketName(getValues("carName"))}/${image.name}`, image, {
              cacheControl: "3600",
              upsert: true,
            })
            .then(async ({ data, error }) => {
              if (error) {
                throw new Error(`Upload failed for ${image.name}: ${error.message}`);
              }

              //download the url path and store to images state array
              const { data: imageUrl} = supabase.storage.from("car").getPublicUrl(data.path);            

              console.log("Image uploaded:", data);
              return imageUrl.publicUrl; // collect successfully uploaded images and store to state as url
            })
        );
    
        const uploadedImages = await Promise.all(uploadPromises);
         // Store only successfully uploaded images
         setValue("images", uploadedImages);
         return true;
       } catch (err) {
        console.error("One or more image uploads failed:", err);
        return false;
      }
    };

    const onSubmit = async (formdata: formType) => {
      try {
        if(images.length === 0) {
           return;
        }
        if (!errors.carName && !errors.dailyRate && !errors.releaseDate && !errors.steeringType && !errors.doors && !errors.transmission && !errors.ColorOptions && !errors.features && !errors.type) {
          console.log('SUCCESSS', formdata);
          const success = await handleUploadImageToCloud();

          if (success) {
            const updatedFormData = getValues();
            
            mutate(updatedFormData); // only mutate after successful uploads
            console.log("Form submitted successfully");
          } else {
            console.warn("Image upload failed, not submitting form.");
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    
       console.log("data request", formdata);
    };
  

    const handleAddColor = () => {
          const newColor = watch('colorInput').toString();    
          if (newColor.length >= 3)  {
            setValue('ColorOptions', [...getValues('ColorOptions'), newColor]);
          }
    }
    
    const handleRemoveColor = (index: number) => {
        setValue('ColorOptions', watch('ColorOptions').filter((_, i) => i !== index));
    }
   

   return (
     <form onSubmit={handleSubmit(onSubmit)}>
       {/** Upload Images */}
       <div className="flex flex-row items-start w-full h-auto gap-6 mt-6">
         {/** add image button */}
         <div
           onClick={() => inputImageRef.current?.click()}
           className="flex justify-center cursor-pointer size-20 place-items-center bg-white/30 rounded-2xl"
         >
           <input
             ref={inputImageRef}
             type="file"
             accept="image/png, image/jpeg"
             className="hidden"
             onChange={handleImageChange}
             multiple
           />
           <Plus color="#ffff" size={20} />
         </div>

         <div className="flex flex-row items-center gap-4">
           {/** Image preview */}
           {images.map((image, index) => (
             <div
               key={index}
               className="size-48 bg-[#d4d2d0] rounded-2xl relative"
             >
               <Image
                 quality={100}
                 fill
                 src={image ? URL.createObjectURL(image) : ''}
                 alt={`car-${index}`}
                 className="object-cover w-full h-full rounded-2xl"
               />
             </div>
           ))}
           {Array.from({ length: 3 - images.length }).map((_, i) => (
             <div
               key={i}
               className="flex flex-col items-center justify-center gap-1"
             >
               <div className="size-48 bg-[rgb(212,210,208)] rounded-2xl flex items-center justify-center relative">
                 <p className="font-medium text-center text-gray-600 text-md">
                   Add photo
                 </p>
               </div>
               <div>
               </div>
             </div>
           ))}
            <span className="text-sm text-red-400">
                   {errors.images?.message}
               </span>
         </div>
       </div>
      

       {/** Forms */}
       <div className="w-full h-auto mt-6">
         <div className="grid items-start grid-cols-2 gap-4">
           {/** Car name */}
           <div className="flex flex-col gap-1">
             <label htmlFor="carName" className="text-white">
               Car Name
             </label>
             <input
               type="text"
               id="carName"
               {...register("carName")}
               className="p-2 bg-transparent border border-white rounded-lg outline-none"
             />
             <span className="text-sm text-red-400">
               {errors.carName?.message}
             </span>
           </div>

           {/** Daily Rate */}
           <div className="flex flex-col gap-1">
             <label htmlFor="dailyRate" className="text-white">
               Daily Rate
             </label>
             <input
               type="number"
               id="dailyRate"
               {...register("dailyRate")}
               className="p-2 bg-transparent border border-white rounded-lg outline-none"
             />
             <span className="text-sm text-red-400">
               {errors.dailyRate?.message}
             </span>
           </div>

           {/** Release Date */}
           <div className="flex flex-col gap-1">
             <label htmlFor="releaseDate" className="text-white">
               Release Date
             </label>
             <input
               type="date"
               id="releaseDate"
               {...register("releaseDate")}
               className="p-2 bg-transparent border border-white rounded-lg outline-none"
             />
             <span className="text-sm text-red-400">
               {errors.releaseDate?.message}
             </span>
           </div>

           {/** Steering type */}
           <div className="flex flex-col gap-1">
             <label htmlFor="">Steering type</label>
             <div className="flex flex-row items-center gap-4">
               <div className="flex flex-row items-center gap-2">
                 <input
                   type="radio"
                   value={"Manual"}
                   {...register("steeringType")}
                   id="steeringType"
                   defaultChecked
                 />
                 <label htmlFor="manual" className="text-white">
                   Manual
                 </label>
               </div>

               <div className="flex flex-row items-center gap-2">
                 <input
                   type="radio"
                   {...register("steeringType")}
                   id="power"
                   value={"Power"}
                 />
                 <label htmlFor="power" className="text-white">
                   Power
                 </label>
               </div>
             </div>
             <span className="text-sm text-red-400">
               {errors.steeringType?.message}
             </span>
           </div>

           {/** Doors */}
           <div className="flex flex-col gap-1">
             <label htmlFor="doors" className="text-white">
               Doors
             </label>
             <input
               type="number"
               id="doors"
               {...register('doors')}
               className="p-2 bg-transparent border border-white rounded-lg outline-none"
             />
             <span className="text-sm text-red-400">
               {errors.doors?.message}
             </span>
           </div>

           {/** Transmission */}
           <div className="flex flex-col gap-1">
             <label htmlFor="">Transmission</label>
             <div className="flex flex-row items-center gap-4">
               <div className="flex flex-row items-center gap-2">
                 <input
                   type="radio"
                   value={"Manual"}
                   {...register("transmission")}
                   id="steeringType"
                   defaultChecked
                 />
                 <label htmlFor="manual" className="text-white">
                   Manual
                 </label>
               </div>

               <div className="flex flex-row items-center gap-2">
                 <input
                   type="radio"
                   {...register("transmission")}
                   id="automatic"
                   value={"Automatic"}
                 />
                 <label htmlFor="automatic" className="text-white">
                   Automatic
                 </label>
               </div>
             </div>
             <span className="text-sm text-red-400">
               {errors.transmission?.message}
             </span>
           </div>

           {/** Colors */}
           <div className="flex flex-col gap-1 ">
             <label htmlFor="colors" className="text-white">
               Colors
             </label>

             <div className="flex flex-row items-center w-full gap-2">
               <input
                 type="text"
                 id="colors"
                 {...register("colorInput")}
                 placeholder="Enter to save colors"
                 className="flex-1 p-2 bg-transparent border border-white rounded-lg outline-none"

               />
               <button type='button' onClick={handleAddColor} className='h-auto px-3 py-2 min-w-24 bg-secondaryColor'>Add color</button>
             </div>

             <div className="flex flex-row gap-2">
               {getValues('ColorOptions') && getValues('ColorOptions').map((color, i) => (
                 <div
                   key={i}
                   className="bg-[#444141] text-[0.9rem] flex flex-row gap-2 border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300"
                 >
                   {color}{" "}
                   <X onClick={() => handleRemoveColor(i)} className="cursor-pointer" color="white" size={12} />
                 </div>
               ))}
             </div>
             <span className="text-sm text-red-400">
               {errors.colorInput?.message}
             </span>
           </div>

           {/**Type */}
           <div className="flex flex-col gap-1 ">
             <label htmlFor="features" className="text-white">
               Type
             </label>
             <select className="p-2 bg-transparent border border-white rounded-lg outline-none" {...register("type")}>
                <option className='bg-dark' value="Sedan">Sedan</option>
                <option className='bg-dark' value="SUV">SUV</option>
                <option className='bg-dark' value="Truck">Truck</option>
                <option className='bg-dark' value="Coupe">Coupe</option>
                <option className='bg-dark' value="Convertible">Convertible</option>
                <option className='bg-dark' value="Minivan">Minivan</option>
                <option className='bg-dark' value="Van">Van</option>
                <option className='bg-dark' value="Pickup">Pickup</option>
                <option className='bg-dark' value="Motorcycle">Motorcycle</option>
                <option className='bg-dark' value="RV">RV</option>
             </select>
            
             <span className="text-sm text-red-400">
               {errors.type?.message} 
             </span>
           </div>

           {/** Features */}
           <div className="flex flex-col gap-1 ">
             <label htmlFor="features" className="text-white">
               Features
             </label>
             <input
               type="text"
               {...register("features")}
               id="features"
               placeholder="Add features to an item"
               className="p-2 bg-transparent border border-white rounded-lg outline-none"
             />

            
             <span className="text-sm text-red-400">
               {errors.features?.message}
             </span>
           </div>
         </div>

         {/** Submit */}
         <div className="flex justify-end w-full mt-6">
           <div className="flex flex-row items-center gap-6">
             <button onClick={() => router.back()} className="bg-[#e43535] text-white px-3 py-2 min-w-56 h-14">
               Cancel
             </button>
             <button
               type="submit"
               className="bg-[#e4ac35] text-white px-3 py-2 min-w-56 h-14"
             >
               Submit
             </button>
           </div>
         </div>
       </div>
     </form>
   );
}
