using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cake
{
    class Program
    {
        static void Main(string[] args)
        {
            int cakeLength = int.Parse(Console.ReadLine());
            int cakeWidth = int.Parse(Console.ReadLine());
            int cakePeices = cakeLength * cakeWidth;

            int cakePiecesEaten = 0;

            string command = Console.ReadLine();
            while (command != "STOP")
            {
                int currentCakePieces = int.Parse(command);

                cakePiecesEaten += currentCakePieces;

                if (cakePiecesEaten > cakePeices)
                {
                    break;
                }

                command = Console.ReadLine();
            }

            int piecesLeft = Math.Abs(cakePeices - cakePiecesEaten);

            if (command == "STOP")
            {
                Console.WriteLine($"{piecesLeft} pieces are left.");
            }
            else
            {

                Console.WriteLine($"No more cake left! You need {piecesLeft} pieces more.");
            }

        }
    }
}
