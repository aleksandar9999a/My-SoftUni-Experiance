using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moving
{
    class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int height = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();

            int freeSpace = width * length * height;
            double cartonSpace = 0;
            bool mySpace = true;
            double space = 0;

            while (input != "Done")
            {
                int carton = int.Parse(input);
                input = Console.ReadLine();

                cartonSpace += carton;

                if (cartonSpace > freeSpace)
                {
                    mySpace = false;
                    break;
                }
            }

            if (mySpace == true)
            {
                space = freeSpace - cartonSpace;
                Console.WriteLine("{0} Cubic meters left.", space);
            }
            else
            {
                space = cartonSpace - freeSpace;
                Console.WriteLine("No more free space! You need {0} Cubic meters more.", space);
            }
        }
    }
}
