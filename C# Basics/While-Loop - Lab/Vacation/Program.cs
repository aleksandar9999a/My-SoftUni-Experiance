using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vacation
{
    class Program
    {
        static void Main(string[] args)
        {
            double moneyForVacation = double.Parse(Console.ReadLine());
            double saldo = double.Parse(Console.ReadLine());

            int spendCounter = 0;
            int daysCounter = 0;

            string action = string.Empty;

            while (saldo < moneyForVacation && spendCounter < 5)
            {
                action = Console.ReadLine();
                double money = double.Parse(Console.ReadLine());

                if (action == "spend")
                {
                    saldo = saldo - money;
                    if(saldo < 0)
                    {
                        saldo = 0;
                    }
                    spendCounter++;
                }
                else if (action == "save")
                {
                    saldo = saldo + money;
                    spendCounter = 0;
                }

                daysCounter++;
            }

            if (spendCounter == 5)
            {
                Console.WriteLine("You can't save the money.");
                Console.WriteLine(daysCounter);
            }
            if (saldo >= moneyForVacation)
            {
                Console.WriteLine($"You saved the money for {daysCounter} days.");
            }
        }
    }
}
