package com.cv.assignment;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String roman;
        int result;

        do {
            System.out.println("Enter a Roman number: ");
            roman = scanner.next().toUpperCase();
            try {
                result = romanToInteger(roman);
                System.out.println("The integer value of " + roman + " is " + result);
            } catch (IllegalArgumentException e) {
                System.err.println("Invalid Roman numeral: " + e.getMessage());
                result = -1;
            }
        } while (result == -1);
    }

    public static int romanToInteger(String s) {
        // Create a map for Roman numerals to their integer values
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            if (!romanMap.containsKey(currentChar)) {
                throw new IllegalArgumentException("Invalid character: " + currentChar);
            }

            int temp = romanMap.get(currentChar);
            if (temp < prevValue) {
                result -= temp;
            } else {
                result += temp;
            }
            prevValue = temp;
        }
        return result;
    }
}
