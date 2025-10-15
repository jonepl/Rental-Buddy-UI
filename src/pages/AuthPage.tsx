import React from 'react';

type Mode = 'signin' | 'signup';

interface AuthPageProps {
  mode: Mode;
  heroImage: string; // e.g. '/sign-in-hero.jpg'
  leftTitle?: string;
  leftBody?: string;
}

function AuthPage({ mode, heroImage, leftTitle = 'Design with us', leftBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio congue quis.' }: AuthPageProps) {
  const isSignIn = mode === 'signin';
  const heading = isSignIn ? 'Sign in' : 'Sign up';
  const submitLabel = isSignIn ? 'Continue' : 'Create account';
  const switchPrompt = isSignIn ? "Don't have an account?" : 'Already have an account?';
  const switchHref = isSignIn ? '/signup' : '/signin';
  const switchText = isSignIn ? 'Sign up' : 'Sign in';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left panel */}
      <section
        className="relative flex flex-col justify-center bg-center bg-cover text-white p-16"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full grid place-items-center bg-white/90 text-black text-xs font-bold">RB</div>
            <span className="font-semibold">Rental Buddy</span>
          </div>
          <h1 className="text-4xl font-bold">{leftTitle}</h1>
          <p className="text-white/85">{leftBody}</p>
        </div>
      </section>

      {/* Right panel */}
      <section className="flex flex-col justify-center bg-white p-10 md:p-16 text-neutral-900">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">{heading}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <button type="button" className="flex items-center justify-center gap-3 border rounded-full py-3 font-medium hover:bg-neutral-50">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden><path fill="#EA4335" d="M24 9.5c3.15 0 6 1.08 8.24 3.2l6.18-6.18C34.97 2.72 29.93 1 24 1 14.64 1 6.53 6.42 2.71 14.26l7.76 6.02C12.4 14.37 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.5 24.5c0-1.72-.16-3.37-.46-4.96H24v9.4h12.64c-.54 2.9-2.16 5.36-4.6 7.02l7.05 5.47C43.8 37.34 46.5 31.4 46.5 24.5z"/><path fill="#4A90E2" d="M10.47 28.34A14.49 14.49 0 0 1 9.5 24c0-1.49.25-2.92.71-4.26l-7.5-5.84C1.64 16.92 1 20.39 1 24c0 3.61.64 7.08 1.71 10.1l7.76-5.76z"/><path fill="#FBBC05" d="M24 47c6.48 0 11.92-2.14 15.88-5.84l-7.05-5.47C30.87 36.94 27.68 38 24 38c-6.26 0-11.6-4.87-13.53-11.02l-7.76 5.76C6.53 41.58 14.64 47 24 47z"/></svg>
              Continue with Google
            </button>
            <button type="button" className="flex items-center justify-center gap-3 border rounded-full py-3 font-medium hover:bg-neutral-50">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path fill="#1DA1F2" d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.48v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              Continue with Twitter
            </button>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 text-sm my-4">
            <span className="flex-1 border-t" />
            <span>or</span>
            <span className="flex-1 border-t" />
          </div>

          <form className="space-y-4">
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">Full name</label>
                <input id="name" className="w-full border rounded-md p-3 focus:ring-4 focus:ring-brand-500/25 outline-none" placeholder="Jane Doe" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full border rounded-md p-3 focus:ring-4 focus:ring-brand-500/25 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" className="w-full border rounded-md p-3 focus:ring-4 focus:ring-brand-500/25 outline-none" placeholder="••••••••" />
            </div>
            {!isSignIn && (
              <div className="flex items-center gap-2 text-sm">
                <input id="terms" type="checkbox" className="border rounded" />
                <label htmlFor="terms">I agree to the <a href="#" className="underline hover:text-brand-500">Terms</a> and <a href="#" className="underline hover:text-brand-500">Privacy</a>.</label>
              </div>
            )}
            <button type="submit" className="w-full bg-neutral-300 text-neutral-500 rounded-full py-3 font-semibold hover:bg-neutral-400">{submitLabel}</button>
          </form>

          <p className="text-sm text-neutral-600 mt-4">
            {switchPrompt} <a href={switchHref} className="underline hover:text-brand-500">{switchText}</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default AuthPage;
