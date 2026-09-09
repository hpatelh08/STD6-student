import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from './AuthContext';

const STUDENT_ID_PATTERN = /^STU[A-Z0-9]+$/i;

const themedSurface = {
  shell: {
    fontFamily: '"Nunito", "Quicksand", "Segoe UI", sans-serif',
    background: [
      'radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--pastel-blue-deep) 34%, transparent), transparent 34%)',
      'radial-gradient(circle at 88% 20%, color-mix(in srgb, var(--pastel-purple-deep) 26%, transparent), transparent 32%)',
      'radial-gradient(circle at 82% 82%, color-mix(in srgb, var(--pastel-pink-deep) 24%, transparent), transparent 30%)',
      'linear-gradient(135deg, var(--pastel-blue-soft) 0%, #ffffff 42%, var(--pastel-yellow-soft) 100%)',
    ].join(', '),
  } as React.CSSProperties,
  dots: {
    backgroundImage: [
      'radial-gradient(circle at 8% 20%, rgba(255,255,255,0.95) 0 1px, transparent 1px)',
      'radial-gradient(circle at 24% 76%, rgba(255,255,255,0.8) 0 1px, transparent 1px)',
      'radial-gradient(circle at 72% 28%, rgba(255,255,255,0.8) 0 1px, transparent 1px)',
      'radial-gradient(circle at 85% 64%, rgba(255,255,255,0.9) 0 1px, transparent 1px)',
    ].join(', '),
  } as React.CSSProperties,
  panel: {
    background: 'rgba(255, 255, 255, 0.78)',
    border: '1px solid var(--border-soft)',
    boxShadow: 'var(--shadow-depth)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
  } as React.CSSProperties,
  modalPanel: {
    background: 'linear-gradient(145deg, color-mix(in srgb, var(--pastel-blue-soft) 72%, white) 0%, color-mix(in srgb, var(--pastel-purple-soft) 70%, white) 46%, color-mix(in srgb, var(--pastel-yellow-soft) 76%, white) 100%)',
    border: '1px solid var(--border-soft)',
    boxShadow: 'var(--shadow-depth)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
  } as React.CSSProperties,
  story: {
    background: 'var(--gradient-hero)',
    borderRight: '1px solid var(--border-soft)',
  } as React.CSSProperties,
  card: {
    background: 'rgba(255,255,255,0.64)',
    border: '1px solid var(--border-card)',
    boxShadow: 'var(--shadow-card)',
  } as React.CSSProperties,
  input: {
    background: 'rgba(255,255,255,0.84)',
    border: '1px solid var(--border-soft)',
    color: 'var(--text-primary)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
  } as React.CSSProperties,
  ghostButton: {
    color: 'var(--text-accent-blue)',
    background: 'rgba(255,255,255,0.78)',
    border: '1px solid var(--border-soft)',
  } as React.CSSProperties,
  primaryButton: {
    background: 'linear-gradient(135deg, var(--text-accent-blue) 0%, var(--text-accent-purple) 100%)',
    boxShadow: 'var(--shadow-glow-blue)',
  } as React.CSSProperties,
  error: {
    background: 'rgba(248, 113, 113, 0.12)',
    border: '1px solid rgba(248, 113, 113, 0.22)',
    color: '#b91c1c',
  } as React.CSSProperties,
  helper: {
    background: 'rgba(255,255,255,0.64)',
    border: '1px solid var(--border-soft)',
    color: 'var(--text-secondary)',
  } as React.CSSProperties,
  overlay: {
    background: 'rgba(255, 255, 255, 0.38)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
  } as React.CSSProperties,
};

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const normalizedId = studentId.trim().toUpperCase();
    if (!normalizedId) return setError('Student ID is required');
    if (!STUDENT_ID_PATTERN.test(normalizedId)) return setError('Student ID must start with STU (example: STU2024021)');
    if (!password) return setError('Password is required');
    const result = login(normalizedId, password);
    if (!result.ok) setError(result.error ?? 'Invalid Student ID or Password');
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 md:p-8" style={themedSurface.shell}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={themedSurface.dots} />
      <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full blur-3xl" style={{ background: 'color-mix(in srgb, var(--pastel-blue-deep) 42%, transparent)' }} />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full blur-3xl" style={{ background: 'color-mix(in srgb, var(--pastel-peach-deep) 32%, transparent)' }} />

      <motion.div
        className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[34px] md:grid-cols-2"
        style={themedSurface.panel}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="relative hidden flex-col justify-between p-8 md:flex lg:p-10" style={themedSurface.story}>
          <div aria-hidden className="pointer-events-none absolute right-6 top-8 h-28 w-28 rounded-full blur-2xl" style={{ background: 'color-mix(in srgb, var(--pastel-pink-deep) 28%, transparent)' }} />
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-extrabold" style={{ background: 'rgba(255,255,255,0.72)', color: 'var(--text-accent-purple)', border: '1px solid var(--border-card)' }}>
              <span aria-hidden>+</span>
              My Learning Space
            </div>
            <h1 className="mt-5 text-[34px] font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
              Welcome back,
              <br />
              bright learner
            </h1>
            <p className="mt-3 max-w-sm text-[14px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Sign in with your Student ID and continue your learning journey in the same theme as your dashboard.
            </p>
          </div>

          <div className="rounded-[28px] p-6" style={themedSurface.card}>
            <div className="text-xl font-black" style={{ color: 'var(--text-accent-blue)' }}>Ready for today?</div>
            <p className="mt-3 text-[13px] font-bold" style={{ color: 'var(--text-primary)' }}>Lessons, games, and progress are waiting for you.</p>
            <p className="mt-1 text-[12px]" style={{ color: 'var(--text-secondary)' }}>Your login view now stays visually synced with the rest of the app.</p>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <div className="mb-5 md:hidden">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-extrabold" style={{ background: 'rgba(255,255,255,0.75)', color: 'var(--text-accent-purple)', border: '1px solid var(--border-card)' }}>
              <span aria-hidden>+</span>
              My Learning Space
            </div>
            <h1 className="mt-3 text-[26px] font-black leading-tight" style={{ color: 'var(--text-primary)' }}>Student Login</h1>
          </div>

          <div className="mb-6 hidden md:block">
            <h2 className="text-[30px] font-black leading-tight" style={{ color: 'var(--text-primary)' }}>Student Login</h2>
            <p className="mt-1 text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>Enter your Student ID and password to open your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="student-id" className="mb-1.5 block text-[12px] font-extrabold" style={{ color: 'var(--text-secondary)' }}>Student ID</label>
              <input id="student-id" autoComplete="username" value={studentId} onChange={event => setStudentId(event.target.value)} placeholder="STU2024021" className="w-full rounded-2xl px-4 py-3 text-[14px] font-semibold outline-none focus:ring-2" style={themedSurface.input} />
            </div>

            <div>
              <label htmlFor="student-password" className="mb-1.5 block text-[12px] font-extrabold" style={{ color: 'var(--text-secondary)' }}>Password</label>
              <div className="relative">
                <input id="student-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-2xl px-4 py-3 pr-14 text-[14px] font-semibold outline-none focus:ring-2" style={themedSurface.input} />
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute right-2 top-1/2 h-9 -translate-y-1/2 rounded-xl px-3 text-[11px] font-bold" style={themedSurface.ghostButton} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && <div className="rounded-2xl px-3.5 py-2.5 text-[12px] font-bold" style={themedSurface.error}>{error}</div>}

            <button type="submit" className="w-full rounded-2xl py-3.5 text-[14px] font-extrabold text-white" style={themedSurface.primaryButton}>Continue Learning</button>
          </form>

          <p className="mt-3 cursor-default text-center text-[12px] font-semibold" style={{ color: 'var(--text-soft)' }}>Forgot Password?</p>
          <p className="mt-1 text-center text-[12px] font-semibold" style={{ color: 'var(--text-soft)' }}>Use the Parent toggle after signing in to open the parent section.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
