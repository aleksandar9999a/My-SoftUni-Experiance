using System;

namespace Coding
{
    class Program
    {
        static void Main(string[] args)
        {
            string textNumber = Console.ReadLine();
            var dividedNum = textNumber.ToCharArray();

            for (int i = textNumber.Length - 1; i >= 0; i--)
            {
                int counter = int.Parse(dividedNum[i].ToString());
                int bar = int.Parse(dividedNum[i].ToString()) + 33;
                char symbol = Convert.ToChar(bar);

                if (counter == 0)
                {
                    Console.Write("ZERO");
                }

                for (int n = 0; n < counter; n++)
                {
                        Console.Write(symbol);
                }
                Console.WriteLine();
            }
        }
    }
}
