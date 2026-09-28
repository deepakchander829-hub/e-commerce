


import React from "react";

const ForgotPassword = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F9F9FE] px-4 py-10">
      <div className="my-auto w-full max-w-md">
        <div className="rounded-2xl border border-[#E6E5FD] bg-white px-6 py-9 shadow-[0_24px_60px_-24px_rgba(14,12,132,0.22),0_10px_24px_-12px_rgba(14,12,132,0.08)] sm:px-8">

          {/* Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <a
              href="login.html"
              className="mb-6 inline-flex items-center gap-3 no-underline"
            >
              <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-gradient-to-br from-[#5554B3] to-[#32309B] shadow-[0_10px_20px_-8px_rgba(85,84,179,0.55)]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-[#0E0C84]">
                Shoply
              </span>
            </a>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#0E0C84] sm:text-3xl">
              Forgot Your Password?
            </h1>

            <p className="mt-2 mb-0 max-w-[21rem] text-[15px] leading-[1.55] text-[#7977CA]">
              Enter your email address and we'll send you instructions to
              reset your password.
            </p>
          </div>

          {/* Form */}
          <form action="#" method="post">

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-[#0E0C84]"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="block w-full rounded-xl border-[1.5px] border-[#E6E5FD] bg-[#F2F2FE] px-4 py-3 text-[15px] leading-6 text-[#0E0C84] outline-none transition placeholder:text-[#9C9BE2] focus:border-[#5554B3] focus:bg-white focus:ring-4 focus:ring-[#5554B3]/15"
              />

              <p className="mt-2 mb-0 text-[13px] leading-6 text-[#7977CA]">
                We'll email you a secure link to reset your password.
              </p>
            </div>

            {/* Send Reset Link */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#5554B3] bg-[#5554B3] px-4 py-3 text-[15px] font-semibold tracking-wide text-white shadow-[0_12px_24px_-12px_rgba(85,84,179,0.6)] transition hover:border-[#32309B] hover:bg-[#32309B] hover:shadow-[0_0_0_4px_rgba(85,84,179,0.2),0_14px_28px_-12px_rgba(50,48,155,0.65)] focus:outline-none focus:ring-4 focus:ring-[#5554B3]/20"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>

              <span>Send Reset Link</span>
            </button>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <a
                href="login.html"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#5554B3] no-underline transition hover:text-[#32309B] hover:underline"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>

                <span>Back to Login</span>
              </a>
            </div>
          </form>

          {/* Success Message */}
          <div className="mt-8 hidden rounded-2xl border border-[#E6E5FD] bg-[#F2F2FE] px-5 py-6 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#5554B3] to-[#32309B] shadow-[0_14px_28px_-12px_rgba(85,84,179,0.55)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>

            <h2 className="mt-4 mb-1 text-lg font-bold text-[#0E0C84]">
              Reset Link Sent
            </h2>

            <p className="mb-0 text-[13px] leading-6 text-[#7977CA]">
              We've emailed password reset instructions to your account.
              Check your inbox and spam folder.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
