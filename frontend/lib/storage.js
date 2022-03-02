import { useEffect, useState } from "react";

export const get = (key) => {
  return JSON.parse(localStorage.getItem(key)) || null
}

export const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Usage:
 * return cache('abc', Date.now() + (24 * 60 * 60 * 1000), async () => {
 *  return {}
 * })
*/
export const cache = async (key, expire, callback) => {
  const s = get(key);
  if (!s || (s && s.expire && Date.now() > s.expire)) {
    const value = await callback()
    set(key, { expire, value })
    // console.log("FROM CALLBACK", value, expire, s)
    return value
  }
  // console.log("FROM STORAGE", s)
  return s.value
}
