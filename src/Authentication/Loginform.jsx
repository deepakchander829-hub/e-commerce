












const Loginform = () => {
    return (
        <>


<div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-[#F9F9FE] font-sans text-[#0E0C84]">
            <main className="w-full max-w-md my-auto">
                <div className="bg-white border border-[#E6E5FD] rounded-2xl shadow-[0_24px_60px_-24px_rgba(14,12,132,0.22),0_10px_24px_-12px_rgba(14,12,132,0.08)] px-6 py-9 sm:px-8">

                    {/* Logo + Heading */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <a
                            href="/login"
                            className="inline-flex items-center gap-3 mb-6 no-underline"
                        >
                            <span className="w-[46px] h-[46px] inline-flex items-center justify-center rounded-[14px] bg-gradient-to-br from-[#5554B3] to-[#32309B] shadow-[0_10px_20px_-8px_rgba(85,84,179,0.55)]">
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

                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0E0C84]">
                            Welcome Back
                        </h1>

                        <p className="mt-2 mb-0 text-[15px] leading-[1.55] text-[#7977CA] max-w-xs">
                            Sign in to your account to continue shopping.
                        </p>
                    </div>

                    <form action="#" method="post">

                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-[#0E0C84] mb-1.5"
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
                                className="block w-full bg-[#F2F2FE] border-[1.5px] border-[#E6E5FD] rounded-xl px-4 py-3 text-[15px] leading-6 text-[#0E0C84] placeholder:text-[#9C9BE2] outline-none focus:bg-white focus:border-[#5554B3] focus:ring-4 focus:ring-[#5554B3]/15"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-[#0E0C84] mb-1.5"
                            >
                                Password
                            </label>

                            <div className="input-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    minLength="8"
                                    autoComplete="current-password"
                                    className="form-control bg-[#F2F2FE] border-[1.5px] border-[#E6E5FD] rounded-xl px-4 py-3 text-[15px] leading-6 text-[#0E0C84] placeholder:text-[#9C9BE2] focus:bg-white focus:border-[#5554B3] focus:ring-4 focus:ring-[#5554B5]/15"
                                />

                                <span
                                    className="input-group-text bg-[#F2F2FE] border-[1.5px] border-l-0 border-[#E6E5FD] rounded-r-xl text-[#7977CA]"
                                    aria-hidden="true"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end mb-6 mt-2">
                            <a
                                href="/forgot-password"
                                className="text-sm font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login */}
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 w-full bg-[#5554B3] border border-[#5554B3] rounded-xl px-4 py-3 text-[15px] font-semibold tracking-[0.01em] text-white shadow-[0_12px_24px_-12px_rgba(85,84,179,0.6)] hover:bg-[#32309B] hover:border-[#32309B] hover:shadow-[0_0_0_4px_rgba(85,84,179,0.2),0_14px_28px_-12px_rgba(50,48,155,0.65)]"
                        >
                            Login
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <span className="flex-1 h-px bg-[#E6E5FD]" />
                            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9C9BE2]">
                                OR
                            </span>
                            <span className="flex-1 h-px bg-[#E6E5FD]" />
                        </div>

                        {/* Social Buttons */}
                        <div className="row g-3">

                            {/* Google */}
                            <div className="col-12 col-sm-6">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-white border-[1.5px] border-[#E6E5FD] rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0E0C84] hover:bg-[#F2F2FE] hover:border-[#C0BFF9] hover:shadow-[0_8px_20px_-12px_rgba(14,12,132,0.18)]"
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
                            </div>

                            {/* Apple */}
                            <div className="col-12 col-sm-6">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-white border-[1.5px] border-[#E6E5FD] rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0E0C84] hover:bg-[#F2F2FE] hover:border-[#C0BFF9] hover:shadow-[0_8px_20px_-12px_rgba(14,12,132,0.18)]"
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
                        </div>

                        {/* Bottom Divider */}
                        <hr className="border-0 border-t border-[#E6E5FD] mt-8 mb-0" />

                        {/* Signup / Guest */}
                        <div className="text-center mt-5">
                            <p className="text-sm text-[#7977CA] mb-1">
                                Don't have an account?{" "}
                                <a
                                    href="/signup"
                                    className="font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
                                >
                                    Sign Up
                                </a>
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-semibold text-[#5554B3] no-underline hover:text-[#32309B] hover:underline"
                            >
                                Continue as Guest

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
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </form>

                    {/* Security */}
                    <div className="flex items-center justify-center gap-2 mt-7">
                        <span className="inline-flex text-[#5554B3]">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </span>

                        <span className="text-[13px] leading-[1.5] text-[#7977CA]">
                            Secured with 256-bit SSL encryption
                        </span>
                    </div>

                </div>
            </main>
        </div>
        </>
    )
}

export default Loginform;
        