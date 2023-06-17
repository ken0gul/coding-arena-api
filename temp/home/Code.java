public class Code {
          public static void main(String[] args) {
            // Always use "System.out.print()"
            System.out.print(reverse("CodersCampus"));
          }

          private static String reverse(String str) {
            char[] arr = str.toCharArray();
            String newStr = "";
            for(int i=arr.length-1; i >= 0; i--) {
              newStr += arr[i];
            }

            return newStr;
          }
        }