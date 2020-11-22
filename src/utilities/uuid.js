/**
 * Generate an RFC-4122 compliant version 4 UUID using a cryptographically safe
 * approach. The UUID thus generated is of the form
 * `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where
 * - `x` is a hexadecimal digit in [0, f]
 * - `y` is a hexadecimal digit in [8, b]
 *
 * @return {string} a version 4 UUID like
 * @see {@link https://gist.github.com/jed/982883|Jed Schmidt's gist}
 */
export function uuid4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4
    ).toString(16)
  )
}
