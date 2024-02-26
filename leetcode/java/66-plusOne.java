import java.nio.IntBuffer;
import java.util.Arrays;

class Solution {
    public int[] plusOne(int[] digits) {
        int len = digits.length;
        boolean plus = false;

        for (int i = len - 1; i >= 0; --i) {
            if (i == len - 1 || plus) {
                if (digits[i] + 1 > 9) {
                    digits[i] = 0;
                    plus = true;
                    if (i == 0) {
                        IntBuffer intBuffer = IntBuffer.allocate(len + 1);
                        intBuffer.put(new int[]{1});
                        intBuffer.put(digits);
                        return intBuffer.array();
                    }
                } else {
                    digits[i] += 1;
                    plus = false;
                }
            }
        }

        return digits;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] digits = {9, 9, 9};
        System.out.println(Arrays.toString(solution.plusOne(digits)));
    }
}