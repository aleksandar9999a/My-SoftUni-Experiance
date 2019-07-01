using System;

namespace Godzilla_vs._Kong
{
    class Program
    {
        static void Main(string[] args)
        {
            double budgetForFilm = double.Parse(Console.ReadLine());
            int statistics = int.Parse(Console.ReadLine());
            double dressPriceForStatist = double.Parse(Console.ReadLine());

            double decor = budgetForFilm * 0.1;
            double moneyForDress = statistics * dressPriceForStatist;

            if (statistics >= 150)
            {
                moneyForDress -= moneyForDress * 0.10;
            }

            double whatAreYourMoney = decor + moneyForDress;

            if (budgetForFilm < whatAreYourMoney)
            {
                Console.WriteLine("Not enough money!");
                Console.WriteLine($"Wingard needs {whatAreYourMoney - budgetForFilm:f2} leva more.");
            }
            else
            {
                Console.WriteLine("Action!");
                Console.WriteLine($"Wingard starts filming with {budgetForFilm - whatAreYourMoney:f2} leva left.");
            }
        }
    }
}
