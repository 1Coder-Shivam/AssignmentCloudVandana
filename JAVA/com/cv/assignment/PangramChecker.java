package com.cv.assignment;

import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter a sentence: ");
            String sentence = scanner.nextLine(); // Read user input

            boolean isPangram = isPangram(sentence.toLowerCase());
            if (isPangram) {
                System.out.println("The sentence is a pangram.");
            } else {
                System.out.println("The sentence is not a pangram.");
            }
        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }

    public static boolean isPangram(String s) {
        boolean[] alphabet = new boolean[26];
        int index;
        int length = s.length();

        for (int i = 0; i < length; i++) {
            char c = s.charAt(i);
            if ('a' <= c && c <= 'z') {
                index = c - 'a';
                alphabet[index] = true;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (!alphabet[i]) {
                return false;
            }
        }

        return true;
    }
}
