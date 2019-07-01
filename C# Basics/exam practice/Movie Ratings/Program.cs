using System;

namespace Movie_Ratings
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double maxRating = double.MinValue;
            string maxRatingFilm = "";
            double minRating = double.MaxValue;
            string minRatingFilm = "";

            double avarageRating = 0;

            for (int i = 0; i < n; i++)
            {
                string filmName = Console.ReadLine();
                double rating = double.Parse(Console.ReadLine());

                if (rating > maxRating)
                {
                    maxRating = rating;
                    maxRatingFilm = filmName;
                }

                if (rating < minRating)
                {
                    minRating = rating;
                    minRatingFilm = filmName;
                }

                avarageRating += rating;
            }

            Console.WriteLine($"{maxRatingFilm} is with highest rating: {maxRating:f1}");
            Console.WriteLine($"{minRatingFilm} is with lowest rating: {minRating:f1}");
            Console.WriteLine($"Average rating: {avarageRating / n:f1}");
        }
    }
}
