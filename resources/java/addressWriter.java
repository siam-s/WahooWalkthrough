package java;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;
public class addressWriter{
    public static void main(String[] args) {
        try {
            File file = new File("restaurant_list.txt");
            Scanner reader = new Scanner(file);
            while(reader.hasNextLine()) {
                for(int i = 0; i < 5; i++) {
                    reader.nextLine();
                    reader.nextLine();
                    System.out.println(reader.nextLine());
                    reader.nextLine();
                    reader.nextLine();
                }
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred");
            e.printStackTrace();
        }
    } 
}