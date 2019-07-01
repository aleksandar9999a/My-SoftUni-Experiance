using System;

namespace Sum_Prime_Non_Prime
{
    class Program
    {
        static void Main(string[] args)
        {
            string command = string.Empty;

            int primeNumber = 0;
            int nonPrimeNumber = 0;

            bool prime = true;

            while ((command = Console.ReadLine()) != "stop")
            {
                int number = int.Parse(command);
                if (number < 0 )
                {
                    Console.WriteLine("Number is negative.");
                    continue;
                }


                if (number == 1)
                {
                    prime = false;
                }
                else
                {
                    for (int i = 2; i < number; i++)
                    {
                        if (number % i == 0)
                        {
                            prime = false;
                            break;
                        }
                    }
                }

                if (prime)
                {
                    primeNumber += number;
                }
                else
                {
                    nonPrimeNumber += number;
                }

                prime = true;
            }

            Console.WriteLine($"Sum of all prime numbers is: {primeNumber}");
            Console.WriteLine($"Sum of all non prime numbers is: {nonPrimeNumber}");
        }
    }
}
