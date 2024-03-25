package java;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;
public class restaurantSearcher{
    public static void main(String[] args) {
        try {
            File file = new File("restaurant_list.txt");
            Scanner reader = new Scanner(file);
            while(reader.hasNextLine()) {
                System.out.print("[");
                for(int i = 0; i < 4; i++) {
                    System.out.print("\"" + reader.nextLine() +  "\", ");
                }
                System.out.println("\""+ reader.nextLine() + "\"]");
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred");
            e.printStackTrace();
        }
    } 
}