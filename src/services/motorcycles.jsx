import { supabase } from '@lib/supabaseClient'

export async function getBikeById(id) {
  const { data, error } = await supabase
    .from('motorcycles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function getAllBikes() {
  const { data, error } = await supabase
    .from('motorcycles')
    .select('*')
    .order('model_name', { ascending: true })

  if (error) throw error
  return data
}
