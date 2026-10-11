"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const page = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/", // A URL to redirect to after the user verifies their email (optional)
    });
    if (data) {
      console.log(data);

      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e1] bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                নাম
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full rounded-xl border border-[#e0e9e1] bg-[#f8fbf8] px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                ইমেইল
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#e0e9e1] bg-[#f8fbf8] px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                পাসওয়ার্ড
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full rounded-xl border border-[#e0e9e1] bg-[#f8fbf8] px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                placeholder="আবার লিখুন"
                className="w-full rounded-xl border border-[#e0e9e1] bg-[#f8fbf8] px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
            </div>

        

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-gray-500">
            <span className="h-px flex-1 bg-[#e0e9e1]" />
            অথবা
            <span className="h-px flex-1 bg-[#e0e9e1]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#e0e9e1] bg-white px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>
            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#e0e9e1] bg-white px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              <VscGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-800">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-green-600 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ← হোম পেজে ফিরে যান
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
