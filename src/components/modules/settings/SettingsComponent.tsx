"use client";

import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger} from "@/src/components/ui/dialog";
import {Button} from "@/src/components/ui/button";
import {Input} from "@/src/components/ui/input";
import {Switch} from "@/src/components/ui/switch";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {updateUserPassword, userProfileStatusUpdate} from "@/src/services/authentication/auth.service";
import BackBtn from "@/src/components/static/BackBtn";

type PasswordForm = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

interface MyProfileProps {
  status: string;
}

enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

const SettingsComponent = ({user}: {user: MyProfileProps}) => {
  const [open, setOpen] = useState(false);
  // initialize directly from user.status
  const [deactivate, setDeactivate] = useState(user.status === UserStatus.ACTIVE);

  const {register, handleSubmit, reset} = useForm<PasswordForm>();

  const onSubmit = async (data: PasswordForm) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password do not match!");
      return;
    }

    if (data.newPassword === data.oldPassword) {
      toast.error("Password is same");
      return;
    }

    const result = await updateUserPassword({
      newPassword: data.newPassword,
      oldPassword: data.oldPassword,
    });

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    reset();
    setOpen(false);
  };

  const handleDeactivateToggle = async (checked: boolean) => {
    setDeactivate(checked);

    try {
      const newStatus = checked ? UserStatus.ACTIVE : UserStatus.INACTIVE;

      const result = await userProfileStatusUpdate();

      if (result.success) toast.success(`Account status updated to ${newStatus}`);
      else toast.error("Failed to update account status");
    } catch (error) {
      toast.error("Failed to update account status");
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto my-10 md:p-8 p-5 bg-white rounded-xl shadow-md">
        {/* Header */}
        <div className="border-b pb-6 mb-8 flex items-center justify-between">
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-500 mt-2 text-sm">Manage your account, preferences, and privacy options.</p>
          </div>
          <BackBtn />
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <div className="p-6 border rounded-lg transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Update name, email, phone</li>
              <li>Change profile picture</li>
              <li>Edit bio / description</li>
            </ul>
          </div>

          {/* Account & Security */}
          <div className="p-6 border rounded-lg transition space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account & Security</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="text-sm font-medium hover:bg-primary hover:text-white transition">
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                      <DialogDescription>Enter your old password and new password below.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <Input type="password" placeholder="Old Password" {...register("oldPassword", {required: true})} />
                      <Input type="password" placeholder="New Password" {...register("newPassword", {required: true})} />
                      <Input type="password" placeholder="Confirm New Password" {...register("confirmPassword", {required: true})} />
                      <DialogFooter>
                        <Button type="submit" className="bg-primary text-white hover:bg-primary/80">
                          Update Now
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>

            {/* Delete/Deactivate Switch */}
            <div className="flex items-center justify-between border-t pt-4">
              <span className="text-sm text-gray-700 font-medium">{user.status == UserStatus.ACTIVE ? "Active" : "Deactivate"} Account</span>
              <Switch checked={deactivate} onCheckedChange={handleDeactivateToggle} />
            </div>
          </div>

          {/* Preferences */}
          <div className="p-6 border rounded-lg shadow-sm transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Preferences</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Language selection</li>
              <li>Currency format</li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="p-6 border rounded-lg shadow-sm transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email notifications</li>
              <li>Push notifications</li>
              <li>Newsletter subscription</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsComponent;
