using System;

namespace Cinema_Voucher
{
    class Program
    {
        static void Main(string[] args)
        {
             int voucher = int.Parse(Console.ReadLine());

             string filmName = "";

             int filmCounter = 0;
             int foodCounter = 0;

             while (filmName != "End")
             {
                 filmName = Console.ReadLine();

                 if (filmName == "End")
                 {
                     break;
                 }

                 if (filmName.Length > 7)
                 {
                    voucher -= filmName[0] + filmName[1];
                     if (voucher < 0)
                     {
                        break;
                     }

                     filmCounter++;
                 }

                 if (filmName.Length <= 7)
                 {
                    voucher -= filmName[0];
                    if (voucher < 0)
                      {
                         break;
                      }

                      foodCounter++;
                 }
             }

            Console.WriteLine(filmCounter);
            Console.WriteLine(foodCounter);
        }
    }
}
