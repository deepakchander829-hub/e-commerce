
const Signup = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9F9FE] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-[#E6E5FD] bg-white px-6 py-9 shadow-[0_24px_60px_-24px_rgba(14,12,132,0.22),0_10px_24px_-12px_rgba(14,12,132,0.08)] sm:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <a
            href="login.html"
            className="mb-6 inline-flex items-center gap-3 no-underline"
          >
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-gradient-to-br from-[#5554B3] to-[#32309B] shadow-[0_10px_20px_-8px_rgba(85,84,179,0.55)]">
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
            Create Your Account
          </h1>

          <p className="mt-2 mb-0 max-w-xs text-[15px] leading-[1.55] text-[#7977CA]">
            Create an account to start shopping with us.
          </p>
        </div>

        <form action="#" method="post">

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-sm font-semibold text-[#0E0C84]"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              required
              minLength="2"
              autoComplete="name"
              className="block w-full rounded-xl border-[1.5px] border-[#E6E5FD] bg-[#F2F2FE] px-4 py-3 text-[15px] leading-6 text-[#0E0C84] outline-none transition placeholder:text-[#9C9BE2] focus:border-[#5554B3] focus:bg-white focus:ring-4 focus:ring-[#5554B3]/15"
            />
          </div>

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
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-[#0E0C84]"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
              minLength="8"
              autoComplete="new-password"
              className="block w-full rounded-xl border-[1.5px] border-[#E6E5FD] bg-[#F2F2FE] px-4 py-3 text-[15px] leading-6 text-[#0E0C84] outline-none transition placeholder:text-[#9C9BE2] focus:border-[#5554B3] focus:bg-white focus:ring-4 focus:ring-[#5554B3]/15"
            />
          </div>

          {/* Password Strength */}
          <div className="mt-3">
            <div className="flex gap-1.5">
              <span className="h-[5px] flex-1 rounded-full bg-[#CDCCFA]" />
              <span className="h-[5px] flex-1 rounded-full bg-[#7977CA]" />
              <span className="h-[5px] flex-1 rounded-full bg-[#201E90]" />
            </div>

            <div className="mt-1.5 mb-3 flex justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9C9BE2]">
                Weak
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7977CA]">
                Medium
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#201E90]">
                Strong
              </span>
            </div>

            <p className="mb-4 text-[13px] leading-6 text-[#7977CA]">
              Use 8+ characters with a mix of letters, numbers, and symbols.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-semibold text-[#0E0C84]"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
              minLength="8"
              autoComplete="new-password"
              className="block w-full rounded-xl border-[1.5px] border-[#E6E5FD] bg-[#F2F2FE] px-4 py-3 text-[15px] leading-6 text-[#0E0C84] outline-none transition placeholder:text-[#9C9BE2] focus:border-[#5554B3] focus:bg-white focus:ring-4 focus:ring-[#5554B3]/15"
            />
          </div>

          {/* Terms */}
          <div className="mt-4 mb-5 flex items-start gap-2.5">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-[#C0BFF9] bg-[#F2F2FE] text-[#5554B3] accent-[#5554B3] focus:ring-2 focus:ring-[#5554B3]/20"
            />

            <label
              htmlFor="terms"
              className="text-[13px] leading-6 text-[#7977CA]"
            >
              I agree to the{" "}
              <a
                href="#"
                className="font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl border border-[#5554B3] bg-[#5554B3] px-4 py-3 text-[15px] font-semibold tracking-wide text-white shadow-[0_12px_24px_-12px_rgba(85,84,179,0.6)] transition hover:border-[#32309B] hover:bg-[#32309B] hover:shadow-[0_0_0_4px_rgba(85,84,179,0.2),0_14px_28px_-12px_rgba(50,48,155,0.65)] focus:outline-none focus:ring-4 focus:ring-[#5554B3]/20"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#E6E5FD]" />

            <span className="text-[13px] font-semibold uppercase tracking-widest text-[#9C9BE2]">
              OR
            </span>

            <span className="h-px flex-1 bg-[#E6E5FD]" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#E6E5FD] bg-white px-3 py-3 text-[13px] font-semibold text-[#0E0C84] transition hover:border-[#C0BFF9] hover:bg-[#F2F2FE] hover:shadow-[0_8px_20px_-12px_rgba(14,12,132,0.18)] focus:outline-none"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17Z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46Z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07Z"
                />
              </svg>

              <span>Continue with Google</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#E6E5FD] bg-white px-3 py-3 text-[13px] font-semibold text-[#0E0C84] transition hover:border-[#C0BFF9] hover:bg-[#F2F2FE] hover:shadow-[0_8px_20px_-12px_rgba(14,12,132,0.18)] focus:outline-none"
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 384 512"
                aria-hidden="true"
              >
                <path
                  fill="#0E0C84"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>

              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Bottom */}
          <hr className="mt-8 border-0 border-t border-[#E6E5FD]" />

          <p className="mt-5 text-center text-sm leading-6 text-[#7977CA]">
            Already have an account?{" "}
            <a
              href="login.html"
              className="font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Signup;