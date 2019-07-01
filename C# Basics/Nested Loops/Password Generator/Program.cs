using System;

namespace Password_Generator
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int l = int.Parse(Console.ReadLine());

            for (int firstSymbol = 1; firstSymbol < n; firstSymbol++)
            {
                for (int secondSymbol = 1; secondSymbol < n; secondSymbol++)
                {
                    for (int thirdSymbol = 1; thirdSymbol <= l; thirdSymbol++)
                    {
                        for (int fourSymbol = 1; fourSymbol <= l; fourSymbol++)
                        {
                            for (int fiveSymbol = firstSymbol; fiveSymbol <= n; fiveSymbol++)
                            {
                                char third = Convert.ToChar(thirdSymbol + 96);
                                char four = Convert.ToChar(fourSymbol + 96);
                                if (fiveSymbol > firstSymbol && fiveSymbol > secondSymbol)
                                {
                                    Console.Write($"{firstSymbol}{secondSymbol}{third}{four}{fiveSymbol} ");
                                }
                            }
                        }
                    }
                }
            }     
        }
    }
}
