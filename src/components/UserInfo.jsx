"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {

    await authClient.signOut();
    toast.success("sign out successful")
  };
  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-end">
          {/* Trigger: avatar + name + caret */}
          <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer items-center gap-2"
          >
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <Image
                  height={40}
                  width={40}
                  alt={user?.name || "User avatar"}
                  src={user?.image || "/abdullah.png"}
                />
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800 hidden sm:inline">
              {user?.name}
            </span>
            <span className="text-xs text-gray-500">▾</span>
          </div>

          {/* Dropdown card */}
          <div
            tabIndex={0}
            className="dropdown-content z-50 mt-3 w-64 rounded-2xl border border-[#e0e9e1] bg-white p-4 shadow-lg"
          >
            <p className="text-sm font-bold text-gray-900">{user?.name}</p>
            <p className="mt-0.5 text-xs text-gray-500">{user?.email}</p>

            <div className="my-3 h-px bg-[#e0e9e1]" />

            <Link
              href="/profile"
              onClick={() => document.activeElement?.blur()}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
            >
              👤 আমার প্রোফাইল
            </Link>

            <button
              onClick={handleSignOut}
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              ↩ সাইন আউট
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link href={"/signin"}>
            <button className="btn btn-sm sm:btn-md"> সাইন ইন</button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn btn-sm bg-green-600 text-white sm:btn-md">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
