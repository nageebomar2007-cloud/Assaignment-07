"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    if (!name) return;
    await authClient.updateUser({ name });
  };
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="min-h-screen bg-green-50/40">
      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
        <p className="mt-1 text-sm text-gray-600">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        {/* User card */}
        <div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex min-w-0 items-center gap-5">
            <Image
              src={"/abdullah.png"}
              height={30}
              width={30}
              alt="Rezwan Ahmed"
              className="h-20 w-20 shrink-0 rounded-2xl bg-gray-100 object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-xl font-semibold text-gray-900">
                {user?.name}
              </p>
              <p className="truncate text-gray-500">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <span>↩</span> সাইন আউট
          </button>
        </div>

        {/* Info card */}
        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">তথ্য</h2>

          <form
            key={user?.id}
            onSubmit={handleUpdateProfile}
            className="mt-6 space-y-4 px-2 pb-2"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-800"
              >
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user?.name ?? ""}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
