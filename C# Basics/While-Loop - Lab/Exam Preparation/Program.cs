using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam_Preparation
{
    class Program
    {
        static void Main(string[] args)
        {
            int scoreCount = int.Parse(Console.ReadLine());

            int count = 0;
            int count2 = 0;

            string problemName = string.Empty;
            double score = 0;
            double avarageScore = 0;

            while (scoreCount != count)
            {
                string lastProblem = problemName;
                problemName = Console.ReadLine();

                if (problemName == "Enough")
                {
                    avarageScore = avarageScore / count2;
                    Console.WriteLine($"Average score: {avarageScore:f2}");
                    Console.WriteLine($"Number of problems: {count2}");
                    Console.WriteLine($"Last problem: {lastProblem}");
                    break;
                }


                count2++;
                score = double.Parse(Console.ReadLine());
                avarageScore = avarageScore + score;

                if (score <= 4)
                {
                    count++;
                }
            }

            if (count == scoreCount)
            {
                Console.WriteLine($"You need a break, {count} poor grades.");
            }
        }
    }
}
