'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  useEffect(() => {
    const testConnection = async () => {
      console.log('Testing Supabase connection...')

      const { data, error, status, statusText } = await supabase
        .from('devices')
        .select('*')
        .limit(1)

      console.log('STATUS:', status, statusText)

      if (error) {
        console.error('❌ Supabase ERROR:', error)
        return
      }

      console.log('✅ Supabase connected successfully!')
      console.log('DATA SAMPLE:', data)
    }

    testConnection()
  }, [])

  return <div>Check console 🔥</div>
}