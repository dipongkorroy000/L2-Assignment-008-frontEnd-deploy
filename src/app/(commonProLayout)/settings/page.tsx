"use client";

import {useRouter} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger} from "@/src/components/ui/dialog"; // shadcn dialog
import {Button} from "@/src/components/ui/button";
import {Input} from "@/src/components/ui/input";
import {Switch} from "@/src/components/ui/switch";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {updateUserPassword} from "@/src/services/authentication/auth.service";

type PasswordForm = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const SettingsPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deactivate, setDeactivate] = useState(false);
  const {register, handleSubmit, reset} = useForm<PasswordForm>();

  const onSubmit = async (data: PasswordForm) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password do not match!");
      return;
    }

    if (data.newPassword == data.oldPassword) {
      toast.error("Password is same");
      return;
    }
    // console.log("Password update payload:", data);

    const result = await updateUserPassword({newPassword: data.newPassword, oldPassword: data.oldPassword});

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    reset();
    setOpen(false);
  };

  const handleDeactivateToggle = (checked: boolean) => {
    setDeactivate(checked);
    if (checked) {
      // TODO: call API to deactivate or delete account
      console.log("Account deactivated/deleted");
    } else {
      console.log("Account active");
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

          {/* Back Button */}
          <button onClick={() => router.back()} className="flex gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
            <ArrowLeft />
            Back
          </button>
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
              <span className="text-sm text-gray-700 font-medium">Deactivate / Active Account</span>
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

export default SettingsPage;
