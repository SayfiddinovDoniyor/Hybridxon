const Books = [
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                description: "A classic novel about the American Dream.",
                cover: "https://i.pinimg.com/736x/d9/e1/65/d9e1658b173b0b7a8369830acee01cbc.jpg",
                file: "books/the-great-gatsby.pdf",
                price: "$15",
                genres: ["Fiction", "Classic", "Literary"]
              },
              {
                title: "1984",
                author: "George Orwell",
                description: "A dystopian novel about totalitarianism.",
                cover: "https://i.pinimg.com/736x/17/fb/e1/17fbe1b3096863d5af032ce42c80c79c.jpg",
                file: "books/1984.pdf",
                price: "$5",
                genres: ["Fiction", "Dystopian", "Political"]
              },
              {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "A story of racial injustice in the American South.",
                cover: "https://i.pinimg.com/736x/22/6a/82/226a8218d7ce8c30743a0585ff4b8155.jpg",
                file: "books/Harper Lee - To Kill a Mockingbird (1988)_0.pdf",
                price: "$45",
                genres: ["Fiction", "Classic", "Historical", "Social Issues"]
              },
            
              {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                description: "A tale of love, class, and misunderstandings in Regency-era England.",
                cover: "https://i.pinimg.com/736x/4a/bb/2b/4abb2b116e0736c4a57d1b0dd5b59833.jpg",
                file: "books/Pride and Prejudice.pdf",
                price: "$18",
                genres: ["Fiction", "Classic", "Romance"]
              },
            
              {
                title: "Atomic Habits",
                author: "James Clear",
                description: "An easy and proven way to build good habits and break bad ones",
                cover: "https://i.pinimg.com/736x/8c/50/9a/8c509a91adca718140857ef57730f1d9.jpg",
                file: "books/Atomic Habits (James Clear) .pdf",
                price: "$32",
                genres: ["Non-fiction", "Self-Help", "Personal Development"]
              },
            
              {
                title: "Until the End of Time",
                author: "Brian Greene",
                description: "A fascinating exploration of the nature of time, the universe, and humanity’s place within it, blending physics, philosophy, and storytelling to examine our search for meaning in an ever-evolving cosmos.",
                cover: "https://m.media-amazon.com/images/I/91-FLzVWDAL._AC_UF1000,1000_QL80_.jpg",
                file: "books/until-the-end-of-time-mind-matter-and-our-search-for-meaning-in-an-evolving-universe-1524731676-9781524731670-9781524731687.pdf",
                price: "$13",
                genres: ["Non-fiction", "Science", "Philosophy", "Cosmology"]
              },
            
              {
                title: "Newton's Principia",
                author: "Sir Isaac Newton",
                description: "A groundbreaking work in physics and mathematics, Philosophiae Naturalis Principia Mathematica lays the foundation for classical mechanics, introducing Newton's laws of motion and universal gravitation.",
                cover: "https://m.media-amazon.com/images/I/611aW5HyOEL._AC_UF1000,1000_QL80_.jpg",
                file: "books/Isaac-Newton-Principia-English-1846.pdf",
                price: "$40",
                genres: ["Non-fiction", "Science", "Mathematics", "Physics"]
              },
              {
                title: "The Body Keeps the Score",
                author: "Bessel van der Kolk, M.D.",
                description: "An exploration of how trauma affects the body and mind, and paths to healing.",
                cover: "https://i.pinimg.com/736x/0e/a0/46/0ea046a2ae0aac2fb2a1f0a8ffde834f.jpg",
                file: "books/The-Body-Keeps-the-Score-PDF.pdf",
                price: "$10",
                genres: ["Non-fiction", "Psychology", "Mental Health"]
              },
            
              {
                title: "365 Days with Self-Dicipline",
                author: "Martin Meadows",
                description: "365 life-altering thoughts on self-control, mental resilience, and success",
                cover: "https://i.pinimg.com/736x/b3/fc/88/b3fc880daf255097a8140fcdd19014b0.jpg",
                file: "books/365 Days with Self-Discipline (Martin Meadows).pdf",
                price: "$17",
                genres: ["Non-fiction", "Self-Help", "Personal Development"]
              },
            
              {
                title: "Calm",
                author: "The School of Life",
                description: "Educate yourself in the art of remaining calm, and learn how",
                cover: "https://www.veronicacollignon.com/wp-content/uploads/2020/11/veronica-collignon-calm-book-cover.jpg",
                file: "books/Calm_Educate_yourself_in_the_art_of_remaining_calm,_and_learn_how.pdf",
                price: "$19",
                genres: ["Non-fiction", "Self-Help", "Mindfulness", "Wellness"]
              },
            
              {
                title: "The Three Mistakes of My Life",
                author: "Chetan Bhagat",
                description: "A story about business, cricket and religion",
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1216107646i/3320520.jpg",
                file: "books/Chetan Bhagat -three mistakes of my life.pdf",
                price: "$14",
                genres: ["Fiction", "Contemporary", "Drama"]
              },
            
              {
                title: "It Ends with Us",
                author: "Colleen Hoover",
                description: "A powerful romance about love, resilience, and breaking cycles of abuse.",
                cover: "https://i.pinimg.com/736x/2e/fc/66/2efc66ea9b7a3389e6849793a4769125.jpg",
                file: "books/It Ends with Us (Colleen Hoover).pdf",
                price: "$22",
                genres: ["Fiction", "Romance", "Contemporary", "Drama"]
              },
            
              {
                title: "Reminders of Him",
                author: "Colleen Hoover",
                description: "A heartfelt story of redemption, forgiveness, and second chances.",
                cover: "https://i.pinimg.com/736x/3e/1c/ba/3e1cba863ad0dd7c397c7b2c0bcf6175.jpg",
                file: "books/Reminders of Him (Colleen Hoover).pdf",
                price: "$27",
                genres: ["Fiction", "Romance", "Contemporary", "Drama"]
              },
            
              {
                title: "Ugly Love",
                author: "Colleen Hoover",
                description: "An intense romance about love, loss, and emotional healing.",
                cover: "https://i.pinimg.com/736x/ac/17/72/ac17727900746f5ac87bd05edb1414d7.jpg",
                file: "books/Ugly Love (Colleen Hoover).pdf",
                price: "$31",
                genres: ["Fiction", "Romance", "Contemporary", "New Adult"]
              },
            
              {
                title: "It's not How Good You Are, It's How good You Want to be",
                author: "Paul Arden",
                description: "A motivational guide to unlocking creativity and achieving success.",
                cover: "https://i.pinimg.com/736x/4c/8f/43/4c8f4316fe0293d2a034a9799e3748f8.jpg",
                file: "books/It’s_Not_How_Good_You_Are,_It’s_How_Good_You_Want_to_Be_The_world’s.pdf",
                price: "$20",
                genres: ["Non-fiction", "Self-Help", "Business", "Creativity"]
              },
            
              {
                title: "5 AM Club",
                author: "Robin Sharma",
                description: "A transformative guide to maximizing productivity and success by mastering your mornings.",
                cover: "https://i.pinimg.com/736x/c5/a6/4b/c5a64b433d1e3617d26f8c997a5ac263.jpg",
                file: "books/The 5 AM Club_ Own Your Morning. Elevate Your Life.pdf",
                price: "$30",
                genres: ["Non-fiction", "Self-Help", "Productivity", "Motivation"]
              },
            
              {
                title: "The Alchemist",
                author: "Paulo Coelho",
                description: "A mystical journey of self-discovery, fate, and the pursuit of one's true purpose.",
                cover: "https://i.pinimg.com/736x/61/b6/29/61b6294cb679c0bf94a348ae6be67f5b.jpg",
                file: "books/The Alchemist.pdf",
                price: "$34",
                genres: ["Fiction", "Fantasy", "Philosophical", "Adventure"]
              },
            
              {
                title: "The Laws of Human Nature",
                author: "Robert Greene",
                description: "An insightful exploration of human behavior and the psychology behind social interactions.",
                cover: "https://i.pinimg.com/736x/51/6d/d9/516dd93aa788cafe47080e149a55f18f.jpg",
                file: "books/The Laws of Human Nature (Robert Greene).pdf",
                price: "$12",
                genres: ["Non-fiction", "Psychology", "Self-Help", "Social Behavior"]
              },
            
              {
                title: "The Monk Who Sold His Ferrari",
                author: "Robin Sharma",
                description: "A fable about fulfilling your dreams and reaching your destiny",
                cover: "https://m.media-amazon.com/images/I/61v9Dr-6nbL._AC_UF1000,1000_QL80_.jpg",
                file: "books/The Monk Who Sold His Ferrari ( PDFDrive.com ).pdf",
                price: "$14",
                genres: ["Fiction", "Self-Help", "Spirituality", "Personal Growth"]
              },
            
              {
                title: "The Art of Public Speaking",
                author: "Dale Carnegie",
                description: "The original tool for improving public oration",
                cover: "https://i.pinimg.com/736x/90/30/b1/9030b1384455dc897f28318e2399b7a9.jpg",
                file: "books/The_Art_of_Public_Speaking_The_Original_Tool_for_Improving_Public.pdf",
                price: "$16",
                genres: ["Non-fiction", "Self-Help", "Communication", "Public Speaking", "Personal Development"]
              },
            
              {
                title: "Thinking Fast and Slow",
                author: "Daniel Kahneman",
                description: "A deep dive into the two systems of thinking that shape our decisions and judgments.",
                cover: "https://i.pinimg.com/736x/59/13/b3/5913b3449e4cbd0a077fbc99181b3393.jpg",
                file: "books/Thinking, Fast and Slow by Daniel Kahneman.pdf",
                price: "$35",
                genres: ["Non-fiction", "Psychology", "Cognitive Science", "Behavioral Economics", "Self-Help"]
              },
            
              {
                title: "Word Power Made Easy",
                author: "Norman Lewis",
                description: "A comprehensive vocabulary-building guide to improve language skills and communication.",
                cover: "https://m.media-amazon.com/images/I/614-qjCBE4L.jpg",
                file: "books/Thinking, Fast and Slow by Daniel Kahneman.pdf",
                price: "$39",
                genres: ["Non-fiction", "Education", "Self-Help", "Vocabulary", "Language Learning"]
              },
              {
                title: "The Advantures of Sherlock Holmes",
                author: "Arthur Conan Doyle",
                description: "A classic collection of twelve detective stories featuring the brilliant Sherlock Holmes and his loyal companion, Dr. Watson, as they solve intriguing mysteries in Victorian London.",
                cover: "https://i.pinimg.com/736x/0c/e9/79/0ce9791f149b0dd77387eae1d7570012.jpg",
                file: "books/TheAdventuresofSherlockHolmes.pdf",
                price: "$16",
                genres: ["Mystery", "Detective Fiction", "Classics", "Crime", "Thriller"]
              },
              {
                title: "The Little Prince",
                author: "Antoine de Saint Exupéry",
                description: "A timeless fable about love, friendship, and human nature, 'The Little Prince' follows a young prince on a journey across planets, discovering profound truths along the way.",
                cover: "https://i.pinimg.com/736x/77/fc/bc/77fcbcfdbb3986c141b1358a2015d3a1.jpg",
                file: "books/TheLittlePrince.pdf",
                price: "$100",
                genres: ["Fiction", "Philosophy", "Children's Literature", "Fantasy", "Classics"]
              },
              {
                title: "The Count Monte Cristo",
                author: "Alexandre Dumas",
                description: "A gripping tale of betrayal, revenge, and redemption, 'The Count of Monte Cristo' follows Edmond Dantès as he transforms from a wronged sailor into a mysterious and wealthy nobleman seeking justice.",
                cover: "https://i.pinimg.com/736x/10/c5/3f/10c53f620cd0f4df9c2bf9a271dcb84c.jpg",
                file: "books/797The-Count-of-Monte-Cristo.pdf",
                price: "$28",
                genres: ["Fiction", "Adventure", "Historical Fiction", "Classics", "Revenge"]
              },
            
              {
                title: "The Almanack of Naval Ravikant",
                author: "Eric Jorgenson",
                description: "A collection of insights and wisdom from entrepreneur and investor Naval Ravikant, covering topics like wealth, happiness, decision-making, and personal growth.",
                cover: "https://i.pinimg.com/736x/42/29/0c/42290cef65903c3745aa237f670f2275.jpg",
                file: "books/Eric-Jorgenson_The-Almanack-of-Naval-Ravikant_Final.pdf",
                price: "$37",
                genres: ["Non-fiction", "Personal Development", "Wealth", "Philosophy", "Entrepreneurship"]
              },
            
              {
                title: "Poirot Investigates",
                author: "Agatha Chistie",
                description: "A collection of short stories featuring the brilliant detective Hercule Poirot, solving intriguing cases with his signature logic, wit, and deduction skills.",
                cover: "https://i.pinimg.com/736x/53/d7/4b/53d74bcc677ce40b6f641a7f2750b5c9.jpg",
                file: "books/Poirot-Investigates-Agatha-Christie.pdf",
                price: "$36",
                genres: ["Mystery", "Detective Fiction", "Crime", "Classics", "Thriller"]
              },
            
              {
                title: "Secrets of Divine Love",
                author: "A. Helwa",
                description: "A spiritual journey into the heart of Islam, offering insights into divine love through Quranic teachings, Islamic mysticism, and personal reflections.",
                cover: "https://m.media-amazon.com/images/I/716S4NoX3kL._AC_UF1000,1000_QL80_.jpg",
                file: "books/secrets-of-divine-love-a-spiritual-journey-into-the-heart-of-islam-1734231203-9781734231205_compress.pdf",
                price: "$33",
                genres: ["Spirituality", "Islam", "Religion", "Mysticism", "Self-Help"]
              },
            
              {
                title: "Fundamentals of Physics",
                author: "Jearl Walker, David Halliday and Robert Resnick",
                description: "A comprehensive and accessible guide to classical and modern physics, featuring clear explanations and problem-solving techniques.",
                cover: "https://m.media-amazon.com/images/I/81+lwBghWBL._AC_UF1000,1000_QL80_.jpg",
                file: "books/NewUU/Jearl Walker, David Halliday and Robert Resnick, Fundamentals of physics - 10th edition.pdf",
                price: "$35",
                genres: ["NewUU"]
              },
            
              {
                title: "Calculus. Early Transcendentals",
                author: "James Stewart, Daniel Clegg, Saleem Watson",
                description: "A widely acclaimed textbook covering essential calculus concepts with clear explanations, real-world applications, and a strong emphasis on problem-solving.",
                cover: "https://images.booksense.com/images/927/613/9781337613927.jpg",
                file: "books/NewUU/Calculus_Early_Transcendentals_Ninth_Edition_by_James_Stewart,_Daniel.pdf",
                price: "$29",
                genres: ["NewUU"]
              },
            
              {
                title: "Linear Algebra: A Modern Introduction",
                author: "David Pole",
                description: "An intuitive and applications-driven approach to linear algebra, balancing theory with real-world problem-solving techniques.",
                cover: "https://m.media-amazon.com/images/I/61WAsuulGzS._AC_UF1000,1000_QL80_.jpg",
                file: "books/NewUU/David_Poole_Linear_Algebra_A_Modern_Introduction_2014,_Cengage_Learning.pdf",
                price: "$41",
                genres: ["NewUU"]
              }
        ];

export default Books
