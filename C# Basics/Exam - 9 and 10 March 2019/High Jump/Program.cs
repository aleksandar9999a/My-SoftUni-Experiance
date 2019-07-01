using System;

namespace High_Jump
{
    class Program
    {
        static void Main(string[] args)
        {
            int finallTargetJump = int.Parse(Console.ReadLine());
            int targetJump = finallTargetJump - 30;
            int currentJump = 0;

            int jumpCounter = 0;
            int unsuccessfulJumpCounter = 0;
            bool isJump = true;

            while (isJump)
            {
                jumpCounter++;
                currentJump = int.Parse(Console.ReadLine());

                if (currentJump > targetJump)
                {
                    if (targetJump >= finallTargetJump)
                    {
                        break;
                    }
                }

                if (currentJump <= targetJump)
                {
                    unsuccessfulJumpCounter++;
                    if (unsuccessfulJumpCounter == 3)
                    {
                        isJump = false;
                    }
                }
                else
                {
                    unsuccessfulJumpCounter = 0;
                    targetJump += 5;
                }
            }

            if (isJump)
            {
                Console.WriteLine($"Tihomir succeeded, he jumped over {finallTargetJump}cm after {jumpCounter} jumps.");
            }
            else
            {
                Console.WriteLine($"Tihomir failed at {targetJump}cm after {jumpCounter} jumps.");
            }
        }
    }
}
