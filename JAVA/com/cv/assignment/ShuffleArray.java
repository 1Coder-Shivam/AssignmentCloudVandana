package com.cv.assignment;

import java.util.*;

public class ShuffleArray {

    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5,6,7};
        List<Integer> list = Arrays.asList(array);

        //shuffle the list
        Collections.shuffle(list);

        //convert shuffled list back to array
        list.toArray(array);

        //print the shuffled array
        System.out.println(Arrays.toString(array));
    }
}
