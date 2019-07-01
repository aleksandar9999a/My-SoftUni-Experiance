using System;

namespace Travelling
{
    class Program
    {
        static void Main(string[] args)
        {
            string destination = string.Empty;
            double budget = 0;
            double saveMoney = 0;
            double money = 0;


            while (destination != "End")
            {
                destination = Console.ReadLine();
                if(destination == "End") { break; }
                budget = double.Parse(Console.ReadLine());

                while (saveMoney < budget)
                {
                    money = double.Parse(Console.ReadLine());
                    saveMoney += money;
                }

                Console.WriteLine($"Going to {destination}!");
                saveMoney = 0;
            }
        }
    }
}
