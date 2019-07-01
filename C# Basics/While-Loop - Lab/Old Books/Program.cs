using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Old_Books
{
    class Program
    {
        static void Main(string[] args)
        {
            string bookName = Console.ReadLine();
            int bookNumbers = int.Parse(Console.ReadLine());

            string input = string.Empty;
            int count = 0;

            while (bookName != input)
            {
                input = Console.ReadLine();
                count++;
                if (count == bookNumbers && bookName != input)
                {
                    Console.WriteLine("The book you search is not here!");
                    Console.WriteLine($"You checked {count} books.");
                    break;
                }

                else if (bookName == input)
                {
                    count--;
                    Console.WriteLine($"You checked {count} books and found it.");
                    break;
                }
            }
        }
    }
}
