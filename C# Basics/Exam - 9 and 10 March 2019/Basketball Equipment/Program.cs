using System;

namespace Basketball_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            int myMoney = int.Parse(Console.ReadLine());
            double shoes = myMoney - myMoney * 0.4;
            double dress = shoes - shoes * 0.2;
            double ball = dress * 0.25;
            double accessories = ball * 0.2;

            Console.WriteLine($"{myMoney + shoes + dress + ball + accessories:f2}");
        }
    }
}
