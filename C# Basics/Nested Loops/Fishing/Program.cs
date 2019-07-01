using System;

namespace Fishing
{
    class Program
    {
        static void Main(string[] args)
        {
            int fishCounter = int.Parse(Console.ReadLine());
            double[] profitOrLost = new double[fishCounter];
            int fishCounter2 = 0;
            int moneyForFishNameSum = 0;
            double noMoneyForMe = 0;
            string fishName = string.Empty;

            for (int i = 0; i < fishCounter; i++)
            {
                fishName = Console.ReadLine();
                moneyForFishNameSum = 0;

                if (fishName == "Stop")
                {
                    break;
                }

                double fishWight = double.Parse(Console.ReadLine());

                for (int j = 0; j < fishName.Length; j++)
                {
                    char moneyForFishName = fishName[j];
                    moneyForFishNameSum += moneyForFishName;
                }

                profitOrLost[i] = moneyForFishNameSum / fishWight;

                if ((i + 1 )% 3 == 0)
                {
                    noMoneyForMe += profitOrLost[i];
                }
                else
                {
                    noMoneyForMe -= profitOrLost[i];
                }

                fishCounter2++;
            }

            if (fishName != "Stop")
            {
                Console.WriteLine("Lyubo fulfilled the quota!");
            }
            if (noMoneyForMe > 0)
            {
                Console.WriteLine($"Lyubo's profit from {fishCounter2} fishes is {noMoneyForMe:f2} leva.");
            }
            else
            {
                Console.WriteLine($"Lyubo lost {Math.Abs(noMoneyForMe):f2} leva today.");
            }
        }
    }
}
