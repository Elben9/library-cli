import { describe, expect, it } from 'vitest'
import { add } from '../src/index'

describe('demo', () => {
  it('should work', () => {
    expect(add(2, 3)).toBe(5)
  })
})
