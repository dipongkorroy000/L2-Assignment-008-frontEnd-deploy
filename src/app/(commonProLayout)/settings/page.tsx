"use client";

import {useRouter} from "next/navigation";
import {ArrowLeft} from "lucide-react";

const SettingsPage = () => {
  const router = useRouter();

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
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Update name, email, phone</li>
              <li>Change profile picture</li>
              <li>Edit bio / description</li>
            </ul>
          </div>

          {/* Account & Security */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account & Security</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Change password</li>
              <li>Enable two-factor authentication</li>
              <li>Delete or deactivate account</li>
            </ul>
          </div>

          {/* Preferences */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Preferences</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Language selection</li>
              <li>Currency format</li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
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
