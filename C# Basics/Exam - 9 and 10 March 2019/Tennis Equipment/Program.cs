using System;

namespace Tennis_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            double tenisPrice = double.Parse(Console.ReadLine());
            int tenisCount = int.Parse(Console.ReadLine());
            int shoesCount = int.Parse(Console.ReadLine());

            double fullPrice = tenisPrice * tenisCount + ((tenisPrice / 6) * shoesCount) + (tenisPrice * tenisCount + ((tenisPrice / 6) * shoesCount)) * 0.2;

            Console.WriteLine($"Price to be paid by Djokovic {Math.Floor(fullPrice / 8)}");
            Console.WriteLine($"Price to be paid by sponsors {Math.Ceiling(fullPrice * 7 / 8)}");
        }
    }
}
