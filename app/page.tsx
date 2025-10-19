'use client';

import React, { useState } from 'react';
import { BookOpen, Target, TrendingUp, CheckCircle } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xovkbdwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="border-b-2 border-orange-400 bg-white/80 backdrop-blur-sm py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-orange-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
            BookFinish
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Got 10 unread books?
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Yeah, me too.
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We keep buying books we never finish. It&apos;s frustrating, right?
            What if putting a little money on the line could actually make you finish them?
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-300 rounded-xl p-8 mb-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-orange-500">📖</span> Here&apos;s the deal:
          </h3>
          <div className="space-y-3 text-gray-800 text-lg">
            <p className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              You lock up $5 when you commit to finishing a book
            </p>
            <p className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              Set your own deadline (1 week, 2 weeks, whatever works)
            </p>
            <p className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              Finish on time? Get your money back + bonus from people who quit
            </p>
            <p className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              Don&apos;t finish? Your $5 goes to people who did
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <Target className="w-10 h-10 text-green-600 mb-3" />
            <h4 className="font-bold text-gray-900 text-lg mb-2">Win Money</h4>
            <p className="text-gray-700">
              Finish your book and earn bonus cash from people who didn&apos;t. Real motivation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
            <h4 className="font-bold text-gray-900 text-lg mb-2">Build Streaks</h4>
            <p className="text-gray-700">
              Like Duolingo but for books. Track your reading streak and watch it grow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <CheckCircle className="w-10 h-10 text-purple-600 mb-3" />
            <h4 className="font-bold text-gray-900 text-lg mb-2">Your Rules</h4>
            <p className="text-gray-700">
              Choose your book, set your deadline, pick your amount. You&apos;re in control.
            </p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-3">
            Want to finally finish those books?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            We&apos;re building this right now. Join the waitlist and be the first to try it.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-gray-900 font-bold text-lg">
                ✓ You&apos;re on the list!
              </p>
              <p className="text-gray-700 mt-2">
                We&apos;ll email you when it&apos;s ready to try.
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Built on Stacks blockchain • Your money, your rules
          </p>
        </div>
      </main>
    </div>
  );
}