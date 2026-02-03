'use server'

import { cookies } from 'next/headers'

export async function verifyCredentials(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')

    const validUser = process.env.ADMIN_USER
    const validPass = process.env.ADMIN_PASSWORD

    // Basic check to ensure env vars are set
    if (!validUser || !validPass) {
        console.error("Admin credentials not set in environment variables.")
        return { success: false, message: 'Server configuration error.' }
    }

    if (username === validUser && password === validPass) {
        // In a real app, you might set a session cookie here
        // For this refactor, we are just verifying credentials securely
        return { success: true }
    }

    return { success: false, message: 'Invalid credentials' }
}
