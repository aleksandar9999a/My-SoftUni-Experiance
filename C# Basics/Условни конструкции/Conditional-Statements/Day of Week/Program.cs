using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            string day = Console.ReadLine();
            string dayName = "Error";

            switch(day)
            {
                case "1":
                    {
                        dayName = "Monday";
                        break;
                    }

                case "2":
                    {
                        dayName = "Tuesday";
                        break;
                    }

                case "3":
                    {
                        dayName = "Wednesday";
                        break;
                    }

                case "4":
                    {
                        dayName = "Thursday";
                        break;
                    }

                case "5":
                    {
                        dayName = "Friday";
                        break;
                    }

                case "6":
                    {
                        dayName = "Saturday";
                        break;
                    }

                case "7":
                    {
                        dayName = "Sunday";
                        break;
                    }
            }
            Console.WriteLine(dayName);
        }
    }
}
