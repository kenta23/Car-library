<?php

namespace App\Actions\Fortify;

use App\Models\AdminModel;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UpdateAdminProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given admin's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(AdminModel $admin, array $input): void
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($admin->id),
            ],
            'username' => [
                'required',
                'string',
                'max:50',
                Rule::unique('admin')->ignore($admin->id),
            ]
        ])->validateWithBag('updateProfileInformation');

        if ($input['email'] !== $admin->email &&
            $admin instanceof MustVerifyEmail) {
            $this->updateVerifiedUser($admin, $input);
        } else {
            $admin->forceFill([
                'name' => $input['name'],
                'email' => $input['email'],
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param  array<string, string>  $input
     */
    protected function updateVerifiedUser(AdminModel $admin, array $input): void
    {
        $admin->forceFill([
            'name' => $input['name'],
            'email' => $input['email'],
            'username' => $input['username'],
        ])->save();

        $admin->sendEmailVerificationNotification();
    }
}
