using System;

namespace Equal_Sums_Left_Right_Position
{
    class Program
    {
        static void Main(string[] args)
        {
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());

            for (int i = n1; i <= n2; i++)
            {
                string currentNumber = i.ToString();
                int leftSum = 0;
                int rightSum = 0;

                for (int leftCounter = 0; leftCounter <= 1; leftCounter++)
                {
                    int leftDigit = int.Parse(currentNumber[leftCounter].ToString());
                    leftSum += leftDigit;
                }
                for (int rightCounter = 4; rightCounter >= 3; rightCounter--)
                {
                    int rightDigit = int.Parse(currentNumber[rightCounter].ToString());
                    rightSum += rightDigit;
                }

                if (leftSum == rightSum)
                {
                    Console.Write(i + " ");
                }
                else
                {
                    if (leftSum < rightSum)
                    {
                        leftSum += int.Parse(currentNumber[2].ToString());
                        if (leftSum == rightSum)
                        {
                            Console.Write(i + " ");
                        }
                    }
                    if (leftSum > rightSum)
                    {
                        rightSum += int.Parse(currentNumber[2].ToString());
                        if (leftSum == rightSum)
                        {
                            Console.Write(i + " ");
                        }
                    }
                }
            }
        }
    }
}
