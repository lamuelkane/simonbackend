import bcrypt from 'bcrypt'

 const data = {
 users:[
     {
        name: "lemuel",
        email:"ashulemuel@gmail.com",
        password: bcrypt.hashSync('lanyoestate', 8),
        isAdmin:true
     }
 ],
 categorie: [
   {category:"edibles"},
   {category:"aaa"}, 
   {category:"hybrid"},
   {category:"indica"},
   {category:"sativa"}, 
   {category:"aaaa"}, 
   {category:"cbd"}, 
   {category:"vaporizers"}, 
   {category:"tinctures"}, 
   {category:"mushroom"}, 
   {category:"concentrates"}
],
categories: [
    {category:"hats"},
    {category:"shoes"}, 
    {category:"skirts"},
    {category:"t-shirts"},
    {category:"shorts"}, 
 ],

 product: [
    {
        name:"Grape   Ape",
        image:"./downloaded-images2/AAA/1427-BLG-510x510-1.jpg",
        description:`Grape Ape is a tasty, memorable strain with strong indica roots. Its distinctive look and complex fruity flavor makes it an easy favorite — to say nothing of its incredibly potent body high. Grape Ape is the product of strains as different as Mendocino Purps, an award-winning Northern California crossbreed, the influential staple strain Skunk, and a legendary Afghani landrace. The combination of these nuances has yielded a bold and visually striking variety.

        There are different varieties of Grape Ape, with seeds available from Washington State-based Apothecary Genetics and Barney’s Farm, the seed bank responsible for creating other taste-focused strains like LSD and Pineapple Chunk. Testing lab Analytical 360 has tested samples of Grape Ape at between 15% and 25% THC composition.
        
        Grape Ape is marked by standout colors and multi-layered scents — this is strain with more consumer “bag appeal” than most. Buds are large and have a dense bud structure with tightly-curled leaves. The leaves themselves are a deep green, with certain phenotypes expressing shades of purple and even red, with copper-colored pistils throughout. Trichome count varies from moderate to high, leaving the flowers especially sticky. The multicolored leaves are also very pungent: a candy-like grape smell wafts from the chunky buds. Breaking open the sticky flowers with a grinder gives off a different odor, with some skunky musk from the Skunk #1 parent and more of a thick hash scent from Afghani. When inhaled though, the slightly harsh smoke from Grape Ape tastes more fruity than skunky — notes of grape and berries predominate, leaving behind a sweet sensation at the top of the palate.
        
        This strain has a high that mounts slowly, eventually leading to a very weighty sensation in the head and limbs. Because of its slow onset, those enjoying Grape Ape should consume cautiously, keeping in mind that a little of this strain can go a long way. In ideal conditions, Grape Ape provides a palpable sense of both mental and physical relaxation, easing users into a spacey calmness. Rather than stimulating rapid-fire thoughts, Grape Ape offers a full body stone. Like the similarly simian-named hybrid Gorilla Glue, Grape Ape may leave you feeling like a clumsy, sleepy primate. Its indica strength makes Grape Ape a helpful strain for those suffering from nagging pain, whether due to temporary aches or more chronic conditions like fibromyalgia. It can also soothe sore muscles after strenuous exercise. Mentally, this strain can melt stress and anxiety with the force of its foggy high. Definitely an after-dark strain, making it great for inducing sleep.
        
        Flavours: Grape, Sweet, Earthy
        
        Effects: Relaxed, Sleepy, Happy, Euphoric, Hungry
        
        Medical Benefits: Insomnia, Stress, Pain, Depression, Lack of Appetite`,
        price:55,
        options:[
            {
                name: "7 Grams",
                price: 55,
            },
            {
                name: "14 Grams",
                price: 110,
            },
            {
                name: "28 Grams",
                price: 200,
            }
        ],
        category:"AAA",
        countInStock: 20,
    },
    {
        name:"ACDC(28Grams)",
        image:"./downloaded-images2/AAA/ACDC-2-510x510-1.jpg",
        description:`ACDC is a sativa-dominant phenotype of the high-CBD cannabis strain, Cannatonic. One remarkable characteristic of ACDC is its THC:CBD ratio of 1:20, meaning this strain induces little to no intoxicating effects. Tests have put ACDC’s CBD content as high as 19%, which helps many patients treat pain, anxiety, epilepsy,
         multiple sclerosis, and the negative effects of chemotherapy, all with a clear head. This strain will have you thunderstruck!

        The smell of ACDC is earthy, sweet, and skunky and some may taste a hint of fruit. When smoking the herb, users may be able to detect the cherry and lemongrass scent better. The buds are tight but fluffy and the color is green with orange hairs. Look for different delivery methods such as capsules, teas, tinctures, and lotions.
        
        Recreational users should pass this one by as its profile is more like hemp. Medical patients, especially those with severe disorders like epilepsy, should definitely try it. Medical conditions that ACDC may alleviate include cancer, alcoholism, seizures, and severe pain. Patients with less severe conditions also use this strain.
        
        Because of its higher CBD content, ACDC might be helpful for edible bakers who want to minimize the risk of intense side effects.
        
        An early study at New York University’s Langone Comprehensive Epilepsy Center studied a preparation of CBD in an agent called Epidiolex. Investigators found that the drug was safe, well-tolerated, and effective.
        
        Due to the balance in Sativa/Indica, which may edge towards a Sativa, users should feel an uplifting effect including euphoria, peace, and happiness. You may feel more focused and more sociable. Some have described the sensation as completely relaxing without a worry on the horizon.
        
        Growers can expect a bushy plant with thin, feathery leaves that may grow as high as four feet. It looks and grows like a skunk variety with big colas. The leaves may turn a bit purple and the nugs are about the size of a thumb.
        
        Effects – Happy, Uplifted, Energetic, Relaxed, Focused
        
        Medical Benefits – Stress, Depression, Pain, Inflammation, Muscle Spasms
        
        Flavors – Earthy, Woody, Pine`,  
        price:300.00,
        category:"AAA",
        countInStock: 20,
    },
    {
        name:"Afghan  Kush",
        image:"./downloaded-images2/AAA/Afghan-Kush-2-247x247-11.jpg",
        description:`Afghan Kush has roots that trace back to the Hindu Kush mountain range near the Afghanistan-Pakistan border. There its genotype has been perfected over centuries, making it the ultimate source for hash such as charas and the sticky black Afghani hash. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this strain available for everyone to grow. The buds of this strain develop into massive, blunt-topped nuggets full of resin; pure indica goodness with a heavy yield. Revered for its heavy resin content and powerfully sedating effects, Afghan Kush is a top choice for anyone looking to relax after a long day.

        Due to the heavy Indica effects, it is most often used by insomniacs as a night time medication. It is also used to help people cope with stress and anxiety. People with eating disorders, such as anorexia, use it because of its effect on appetite. Thanks to its heavy body high, it is an ideal strain for pain relief, bringing relaxation to users with chronic pain.
        
        Traditionally, the strain was harvested to produce a very potent hashish – the quality the strain retained. Due to the sturdy nature of this wild strain, it is recommended for amateur growers. Afghan Kush’s unusually high THC content can make up for the lower yields beginners might harvest. It is fairly resistant to disease and molds (another big plus for beginners). Because of its natural hardiness, Afghan Kush can be grown both indoors and out. The strain flowers for seven to eight weeks and is ready for harvest in October when grown outside. Being an Indica, short Afghan Kush plants grow wide, filling out rather than up. A well-grown plant can yield 400 grams per square meter inside or between 500 to 600 grams outside.
        
        Flavours: Earthy, Woody, Pungent
        
        Effects: Relaxed, Sleepy, Happy, Hungry
        
        Medical Uses: Stress, Pain, Insomnia, Depression, Headaches`,
        price:65.00,
        category:"AAA",
        countInStock: 30,
        options:[
            {
                name: "7Grams",
                price: 65.00
            },
            {
                name: "14Grams",
                price: 120,
            },
            {
                name: "28Grams",
                price: 220,
            }
        ],
    },
    {
        name:"Afghan Kush (28 Grams)",
        image:"./downloaded-images2/AAA/Afghan-Kush-2-247x247-1.jpg",
        description:`Afghan Kush has roots that trace back to the Hindu Kush mountain range near the Afghanistan-Pakistan border. There its genotype has been perfected over centuries, making it the ultimate source for hash such as charas and the sticky black Afghani hash. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this strain available for everyone to grow. The buds of this strain develop into massive, blunt-topped nuggets full of resin; pure indica goodness with a heavy yield. Revered for its heavy resin content and powerfully sedating effects, Afghan Kush is a top choice for anyone looking to relax after a long day.

        Due to the heavy Indica effects, it is most often used by insomniacs as a night time medication. It is also used to help people cope with stress and anxiety. People with eating disorders, such as anorexia, use it because of its effect on appetite. Thanks to its heavy body high, it is an ideal strain for pain relief, bringing relaxation to users with chronic pain.
        
        Traditionally, the strain was harvested  to produce a very potent hashish – the quality the strain retained. Due to the sturdy nature of this wild strain, it is recommended for amateur growers. Afghan Kush’s unusually high THC content can make up for the lower yields beginners might harvest. It is fairly resistant to disease and molds (another big plus for beginners). Because of its natural hardiness, Afghan Kush can be grown both indoors and out. The strain flowers for seven to eight weeks and is ready for harvest in October when grown outside. Being an Indica, short Afghan Kush plants grow wide, filling out rather than up. A well-grown plant can yield 400 grams per square meter inside or between 500 to 600 grams outside.
        
        Flavours:  Earthy, Woody, Pungent
        
        Effects: Relaxed, Sleepy, Happy, Hungry
        
        Medical Uses: Stress, Pain, Insomnia, Depression, Headaches`,
        price:250,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Blue  Dream", 
        image:"./downloaded-images2/AAA/Blue-Dream.jpg",
        description:`Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing a Blueberry indica with the sativa Haze, it balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which will ease you gently into a calm euphoria. Sometimes this strain will express more indica-like phenotypes with the look and feel, but the sativa-leaning variety remains most prevalent.

        With a sweet berry aroma redolent of its Blueberry parent, this strain delivers swift symptom relief without heavy sedative effects. This makes this a popular daytime medicine for patients treating pain, depression, nausea, and other ailments requiring a high THC strain.
        
        Blue Dream’s high is all the best parts of its parentage wrapped neatly into a flavor-packed, beautifully balanced package. It begins with a cerebral rush, bringing with it motivation and heightened focus, so enjoy this through any jam-packed schedule. As the high builds you fall into an ultra-relaxed state, leaving you feeling hazy and totally calm. This numbing sensation will find you pain-free and ready for any task.
        
        Continuing with the plethora of effects, users who suffer from anxiety disorders are not recommended to use this strain as it has a tendency to get ahead of you quickly and could definitely agitate pre-existing conditions. However, because it is super potent it does have extremely beneficial elements for patients who suffer from chronic fatigue, depression, and lack of appetite. As it is a stimulant at its core, it will undoubtedly lift your mood and get the body moving. It is also recommended for mild cases of muscle spasms and pains caused by injury or illness.
        
        Effects – Happy, Uplifted, Euphoric, Relaxed, Creative
        
        Medical Benefits – Depression, Stress, Fatigue, Pain, Insomnia
        
        Flavours – Blueberry, Sweet, Berry`,
        price:50,
        options:[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams ",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 220,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Critical Mass  (14 Grams)",
        image:"./downloaded-images2/AAA/critical-mass-247x247-1.jpg",
        description:`Critical Mass is a combination of Afghani and Skunk #1 that originated from the breeder Mr. Nice Seed Bank. With a large “mass” of production, branches tend to snap from the weight of these dense buds. Flowering time is approximately 6-8 weeks, with a heavy leaf to flower ratio. However, due to the large production of flowering, this strain is susceptible to mold which can be reduced by growing indoors to reduce humidity. THC levels of this strain may reach 19-22%.

        This strain is most often reserved for evening or night-time use due to its sedating effect. For the same reason, it’s good for insomniacs seeking a full night’s rest. Critical Mass Indica body high may ease most chronic aches and pains as well as relieve stress and anxiety. Others choose this strain for migraines, nausea, and anorexia. The effects usually last between 2-2.5 hours, depending on the dose. Some users find this strain thought-provoking and nearly psychedelic. As nearly all strains with high THC content, this strain when consumed in higher quantities can produce dry mouth and eyes as well as some paranoia and anxiety.
        
        Critical Mass is Mr. Nice’s rework of an older set of genetics called Big Bud. The intention behind the rework was to create a stable strain with a massive yield and a very desirable high. It is a cross between a landrace Afghani Indica and Skunk #1. Despite being susceptible to molds and requiring support to grow properly, it is recommended to novice growers because of its yield and ability to grow indoors or out. Reported yields of up to 6 pounds make this strain ideal for cash-crop growers. The strain flowers between 6 and 8 weeks, and it grows well in the Sea of Green setup.
        
        Flavors:  Earthy, Sweet, Woody
        
        Effects: Relaxed, Happy, Sleepy, Euphoric, Hungry
        
        Medical Benefits: Stress, Pain, Insomnia, Depression, Inflammation`,
        price:99.00,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Girl   Scout Cookies",
        image:"./downloaded-images2/AAA/Girl-Scout-Cookies-41.jpg",
        description:`GSC, formerly known as Girl Scout Cookies, is an OG Kush and Durban Poison hybridcross whose reputation grew too large to stay within the borders of its California homeland. With a sweet and earthy aroma, the Girl Scout Cookies strain launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss.

        There are several different phenotypes of the GSC strain including Thin Mint and Platinum Cookies, which exhibit some variation in appearance and effect. Typically, however, GSC expresses its beauty in twisting green calyxes wrapped in purple leaves and fiery orange hairs. Patients and consumers looking to cultivate this cannabis staple themselves should wait 9 to 10 weeks for their indoor plants to finish flowering.
        
        GSC has some incredibly powerful effects that are beneficial to the medical community in numerous ways. First and foremost, this is a great strain for treating chronic pain, inflammation, muscle tension, and cramps. Its highly sedative properties will have you feeling relief in no time. Additionally, many use this strain as a stress reliever. The tranquilizer-like feeling of this bud puts you in a place of complete relaxation, slaying stress and even getting you ready for a good night’s sleep.
        
        Effects – Happy, Uplifted, Euphoric, Relaxed, Creative
        
        Medical Benefits – Depression, Stress, Fatigue, Pain, Insomnia
        
        Flavours – Earthy, Sweet, Pungent`,
        price:50.00,
        category:"AAA",
        countInStock: 30,
        options:[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 199,
            }
        ],
    },
    {
        name:"Green Crack",
        image:"./downloaded-images2/AAA/green-crack-2.jpg",
        description:`A perennial favorite, Green Crack is a sativa-dominant hybrid that was bred by inbreeding Skunk #1. Green Crack is usually sativa-dominant, but there’s also a less popular indica-heavy version of the strain. Green Crack got its name from Snoop Dogg, though it’s also known as Green Cush or simply Cush among smokers who prefer not to reference cocaine. This highly addictive strain is massively potent, with top THC levels reaching 24%. It has a sativa/indica ratio of 65:35. The high is decidedly cerebral, with a big mood boost and a jolt of energy. This strain spurs creativity and helps patients get things done. It’s most effective in treating anxiety and depression, along with ADHD, PTSD, and migraines. Green Crack has a sweet flavor with tropical and citrus notes. The buds are dense and tight. Dry mouth occurs frequently, while dry eyes, dizziness, and paranoia, happen less often. It’s most common in the Pacific Northwester, California, Arizona, and Colorado. But it can be found almost anywhere else with relative ease. It’s one of the most popular strains on the black market for this reason.

        Despite mostly indica physical characteristics, Green Crack has a strong and buzzy sativa high. It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. It’s also an inspiring smoke — its sharp sense of focus can help users zero in on creative projects or can draw attention to the nuances in a piece of music or a movie. Green Crack can also have some slightly psychedelic effects, including visual distortions and, particularly, an odd sense of time dilation. Because it can leave users feeling uplifted and fairly wired, this strain isn’t recommended for use late at night. Because it doesn’t have many physically relaxing indica properties, Green Crack doesn’t have a wide range of medical benefits. However, its energizing effects can be great for freeing users from fatigue. Green Crack can also aid those suffering from anxiety and depression, helping them to live in the moment — although in large enough doses, the tendency towards recursive cerebral thinking can plunge some into panic or paranoia.
        
        Effects: Energetic, Happy, Uplifted, Focused, Euphoric 
        
        Medical Benefits: Stress, Depression, Fatigue, Pain, Headaches
        
        Flavours: Citrus, Earthy, Sweet`,
        price:44,
        options:[
            {
                name: "7 Grams",
                price: 44,
            },
            {
                name: "14 Grams",
                price: 144,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Girl Scout Cookies (14 Grams)",
        image:"./downloaded-images2/AAA/Girl-Scout-Cookies-4.jpg",
        description:`GSC, formerly known as Girl Scout Cookies, is an OG Kush and Durban Poison hybridcross whose reputation grew too large to stay within the borders of its California homeland. With a sweet and earthy aroma, the Girl Scout Cookies strain launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss.
        
        There are several different phenotypes of the GSC strain including Thin Mint and Platinum Cookies, which exhibit some variation in appearance and effect. Typically, however, GSC expresses its beauty in twisting green calyxes wrapped in purple leaves and fiery orange hairs. Patients and consumers looking to cultivate this cannabis staple themselves should wait 9 to 10 weeks for their indoor plants to finish flowering.
        
        GSC has some incredibly powerful effects that are beneficial to the medical community in numerous ways. First and foremost, this is a great strain for treating chronic pain, inflammation, muscle tension, and cramps. Its highly sedative properties will have you feeling relief in no time. Additionally, many use this strain as a stress reliever. The tranquilizer-like feeling of this bud puts you in a place of complete relaxation, slaying stress and even getting you ready for a good night’s sleep.
        
        Effects – Happy, Uplifted, Euphoric, Relaxed, Creative
        
        Medical Benefits – Depression, Stress, Fatigue, Pain, Insomnia
        
        Flavors – Earthy, Sweet, Pungent`,
        price:150.00,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Juicy Fruit (28 Grams)",
        image:"./downloaded-images2/AAA/Juicy-Fruit.jpg",
        description:`Juicy Fruit is the original name of Sensi Seeds, being a sativa-dominant hybrid that they now call Fruity Juice, perhaps to avoid trademark infringement. Juicy Fruit smells and tastes sweet and smooth, and many users describe it tasting like Pina Colada and dark berries or plums. The buds are colorful and may exhibit the entire spectrum of cannabis coloring. Juicy Fruit’s parents are two landraces: a Thailand Sativa and an Indica from Afghanistan.

        Sativa is dominant in Juicy Fruit. It boosts moods, fills users with energy and seems to create a ‘time warp’, slowing the perception of time for the users. The high can last up to three hours and can stimulate focus and creativity. The cerebral effects taper off without leaving users feeling drained. As a result, the strain is often prescribed as daytime relief for depression, stress, and anxiety. A mild body high may also accompany the cerebral effects and can assist in alleviating pain and nausea.
        
        This strain may be hard to grow outdoors, but it thrives indoors or in a greenhouse. Juicy Fruit’s Sativa dominance shines through again as plants can reach up to three meters in height. The strain needs between 50 and 60 days to finish flowering. It can reportedly produce a large yield with up to 20% THC.
        
         
        
        Flavors:  Sweet, Fruity, Berry
        
        Effects: Focused, Uplifted, Energetic, Euphoric, Creative
        
        Medical Uses: Depression, Stress, Anxiety, Pain, Nausea`,
        price:240,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Lemon   Skunk",
        image:"./downloaded-images2/AAA/lemon-skunk.jpg",
        description:`<p><strong>Lemon Skunk</strong>&nbsp;is an award-winning Sativa hybrid, known for its lemon flavor and a THC count as high as 22%. It made the High Times list of top 10 strains in 2009.The aroma is Skunky and sweet while the flavor is reminiscent of sweet lemons and other citrus fruit. Lemon Skunk delivers a heady, peppy cerebral high that comes with a boost of energy and creativity, a dose of happiness, and a euphoric kick. It’s an uplifting yet lazy experience. The sativa genes offer effective treatment for depression, nausea, chronic pain, and everyday stresses. CBD levels are a bit higher than average in this strain, roughly 0.5% in some tests, but not high enough to recommend it as treatment for conditions that respond to CBD, such as epilepsy. Dry mouth and watery eyes are the only widely reported negative effects of Lemon Skunk, though paranoia, anxiety, and dizziness are also possible. Found up and down the West Coast, this strain is also popular in Colorado. It occasionally circulates on the black market, as well. Lemon Skunk performs well when used for daytime pain relief, especially in the case&nbsp;of chronic migraines, and&nbsp;is most often prescribed for this purpose. Those suffering from stress, anxiety, and depression favor this strain for its mood elevating properties. The strain is also used for the relief of nausea and eating disorders. Lemon Skunk is designed by DNA Genetics, who chose two different strains of skunk with a strong flavor and scent of lemons as its parents. The mother is a skunk that originated from Vegas, while the father came from Holland. The strain grows easily and is suitable to growers with any experience level. It thrives both indoors and out. Needing 55 to 65 days to finish, the strain can reportedly produce up to 600 grams per square meter. Outside, Lemon Skunk is usually ready for harvest in October in the Northern Hemisphere and in April in the Southern. <strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Creative <strong>Medical Benefits –&nbsp;</strong>Depression,&nbsp;Fatigue,&nbsp;Stress,&nbsp;Pain,&nbsp;Insomnia <strong>Flavours –&nbsp;</strong>Lemon,&nbsp;Skunk,&nbsp;Citrus</p>`,
        price:44,
        options:[
            {
                name: "7 Grams",
                price: 44,
            },
            {
                name: "14 Grams",
                price: 114,
            },
            {
                name: "28 Grams",
                price: 213,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Pineapple Express (28 Grams)",
        image:"./downloaded-images2/AAA/media2F5e16375a63edd23f37fc74112Fproducts2F24998512142043D3D3D3DPineapple-Express-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Pineapple Express strain</strong>&nbsp;has thick and lumpy buds that show off the strain’s hybridized genetics: they are densely packed like indica flowers, but have the long and tapered shape characteristic of many sativa varieties. The deep green leaves are sometimes tinged with shades of red (the result of pigments activated by cold weather during the grow process) and are accented by deep orange to red pistils. This is a very resinous strain, and the sticky flowers can be very hard to break up without a grinder; the residue left behind may be difficult to clean off of surface and fingertips. The predominant smell of&nbsp;<strong>Pineapple Express</strong>&nbsp;flowers is, unsurprisingly, pineapple — but there are other, less tropical scents present like a hint of musk and some dank earthiness.</p>
        <p>When inhaled, the smooth smoke from this strain tastes earthy and a little bit piney. On the exhale, users will detect a sugary sweetness that lingers in the mouth, although not unpleasantly.</p>
        <p><strong>Pineapple Express</strong>&nbsp;offers what can be described as a creeper of a high — smokers may have long since finished savoring the smoke’s unique taste before they notice the effects. They begin in the head, with a change in perception. Many have reported some initial psychedelic distortions like a sharpened focus on colors and sounds. As such,&nbsp;<em>Pineapple Express</em>&nbsp;can be a great strain to accompany a scenic walk. This alert head high is soon accompanied by a tingling relaxation in the extremities that helps users feel at ease, whatever their surroundings. The combination of cerebral focus and mellow relaxation makes Pineapple Express a versatile strain, good for chatty get-togethers or getting through a to-do list. Medically, this strain’s feeling of mental calm can be very effective in treating mood and anxiety disorders, helping patients to be more fully present and energetic. And although this strain isn’t as good as some more indica-dominant hybrids in treating physical pain, its head high can actually be useful in distraction users from the acute perception of chronic pain. The high from Pineapple Express is said to last longer than usual, providing a more economically efficient high for many consumers.</p>
        <p>&nbsp;</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Energetic</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Fatigue,&nbsp;Headaches</p>
        <p><strong>Flavours –&nbsp;</strong>Pineapple,&nbsp;Sweet,&nbsp;Tropical</p>
        <p>&nbsp;</p>
        </div>`,
        price:300,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"MK Ultra (28 Grams)",
        image:"./downloaded-images2/AAA/MK-Ultra-(1).jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">Named after the methods of mental manipulation employed by the CIA’s Project MKUltra, this indica-dominant strain stands apart due to its powerful cerebral effects. A cross between&nbsp;mostly-sativa hybrid&nbsp;OG Kush&nbsp;and indica&nbsp;G-13, this strain is bred by T.H.&nbsp;Seeds and won 1st place Indica at theHigh Times Cannabis Cup in 2003 and 2nd place in 2004. Indoor growing is facilitated by the plant’s short stature, and its above yield delivers particular sticky, dense, pungent flowers. MK Ultra is renowned for its ‘hypnotic’ effects that are fast-acting and best used when strong medication is desired. As evidenced by its collection of awards, this indica is one of the strongest in the world. It may be best for a day when not getting off the couch would be fine.&nbsp;</header>
        <header>MK Ultra plants are short, reaching heights of 100 – 120cm. It has sticky, dense and pungent flowers with tight, resin coated buds which are extremely sticky and almost white. Its scent is a bit strange – it resembles burnt plastic mixed with lemon and diesel. However, there is nothing strange about its taste – a long lasting piney, earthy sweet with a hint of mustiness. The smoke of this strain is very smooth. This powerful strain is considered to be one of the most powerful Indicas in the world. Its hypnotic cerebral effects hit almost immediately. Smoking this strain causes the eyelids to become very heavy and droop, thus making MK Ultra perfect for patients suffering from insomnia. It induces a heavy couch lock, which makes it suitable to combat stress as well.Upon use, users often demonstrate signs of giddiness, with an ever-present smile on their faces. Thus, depression can also be cured with the help of this exceptional strain.</header>
        <div class="description-wrapper">
        <div class="description">
        <p>&nbsp;</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>: &nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Euphoric,&nbsp;Relaxed,&nbsp;Happy,&nbsp;Hungry,&nbsp;Sleepy</p>
        <p><strong>Medical Uses:</strong>&nbsp;Pain,&nbsp;Insomnia,&nbsp;Stress,&nbsp;Nausea,&nbsp;Depression</p>
        </div>
        </div>
        <p>&nbsp;</p>
        </div>`,
        price:250,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"MK Ultra (7 Grams)",
        image:"./downloaded-images2/AAA/MK-Ultra-.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">Named after the methods of mental manipulation employed by the CIA’s Project MKUltra, this indica-dominant strain stands apart due to its powerful cerebral effects. A cross between&nbsp;mostly-sativa hybrid&nbsp;OG Kush&nbsp;and indica&nbsp;G-13, this strain is bred by T.H.&nbsp;Seeds and won 1st place Indica at theHigh Times Cannabis Cup in 2003 and 2nd place in 2004. Indoor growing is facilitated by the plant’s short stature, and its above yield delivers particular sticky, dense, pungent flowers. MK Ultra is renowned for its ‘hypnotic’ effects that are fast-acting and best used when strong medication is desired. As evidenced by its collection of awards, this indica is one of the strongest in the world. It may be best for a day when not getting off the couch would be fine.&nbsp;</header>
        <header>MK Ultra plants are short, reaching heights of 100 – 120cm. It has sticky, dense and pungent flowers with tight, resin coated buds which are extremely sticky and almost white. Its scent is a bit strange – it resembles burnt plastic mixed with lemon and diesel. However, there is nothing strange about its taste – a long lasting piney, earthy sweet with a hint of mustiness. The smoke of this strain is very smooth.This powerful strain is considered to be one of the most powerful Indicas in the world. Its hypnotic cerebral effects hit almost immediately. Smoking this strain causes the eyelids to become very heavy and droop, thus making MK Ultra perfect for patients suffering from insomnia. It induces a heavy couch lock, which makes it suitable to combat stress as well.Upon use, users often demonstrate signs of giddiness, with an ever-present smile on their faces. Thus, depression can also be cured with the help of this exceptional strain.</header>
        <div class="description-wrapper">
        <div class="description">
        <p>&nbsp;</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>: &nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Euphoric,&nbsp;Relaxed,&nbsp;Happy,&nbsp;Hungry,&nbsp;Sleepy</p>
        <p><strong>Medical Uses:</strong>&nbsp;Pain,&nbsp;Insomnia,&nbsp;Stress,&nbsp;Nausea,&nbsp;Depression</p>
        </div>
        </div>
        <p>&nbsp;</p>
        </div>`,
        price:100,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Nuken",
        image:"./downloaded-images2/AAA/Nuken-4-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Nuken Strain</strong>&nbsp;is an indica dominant hybrid (80% indica/ 20% sativa) strain created as cross between the cult favorite God Bud X Kish strains. This potent bud boasts a moderate THC level between 13-25% and has a deliciously enticing aroma and flavor. The aroma of&nbsp;<em>Nuken</em>&nbsp;is that of a sweet marshmallow with a hint of sharp skunk, and the taste is much like a freshly baked marshmallow pie with a hint of skunk upon exhale.&nbsp;<strong>Nuken</strong>&nbsp;buds have large dense and furry light minty green nugs with a thick layer of dark olive green leaves and sparse fiery orange hairs.</p>
        <p>Each nug has a fine layer of translucent crystal trichomes and is dripping with sweet sticky visible resin. The&nbsp;<em>Nuken</em>&nbsp;<em>strain&nbsp;</em>high is characterized by a long-lasting and relaxing buzz that doesn’t leave you sedated and isn’t narcotic in nature. You’ll be hit with a body buzz that starts in your spine and slowly spreads throughout your body, ridding you of any pain. This is accompanied by a deep introspection that can leave you distant and spacey at times. Because of these potent effects, it is said to be perfect for treating conditions such as chronic pain, mild cases of depression, and chronic stress or anxiety.&nbsp;Nuken typically leaves you functional enough to still enjoy hobbies and the company of friends. Nuken blooms with rounded, dense buds covered in a blanket of crystal resin veiling its sage hues.</p>
        <p>The high is characterized by a long-lasting and relaxing buzz that doesn’t leave you sedated and isn’t narcotic in nature. You’ll be hit with a body buzz that starts in your spine and slowly spreads throughout your body, ridding you of any pain. This is accompanied by a deep introspection that can leave you distant and spacey at times. Because of these potent effects, Nuken is said to be perfect for treating conditions such as chronic pain, mild cases of depression, and chronic stress or anxiety.</p>
        <p><strong>Effects –&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Uplifted,&nbsp;Sleepy,&nbsp;Hungry</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Headaches</p>
        <p><strong>Flavours –&nbsp;</strong>Sweet,&nbsp;Woody,&nbsp;Earthy</p>
        <p>&nbsp;</p>
        </div>`,
        price:55,
        options:[
            {
                name: "7 Grams",
                price: 55,
            },
            {
                name: "14 Grams",
                price: 95,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"OG   Kush",
        image:"./downloaded-images2/AAA/OG-kush-1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the most notable strains in North America,&nbsp;<strong>OG Kush</strong>&nbsp;embodies the epitome of Californian cannabis. It has become one of the top strains to crossbreed, because of its proven quality and potency. OG Kush is a cross between&nbsp;Chemdawg&nbsp;and Hindu Kush. Chemdawg is a straight-to-the-brain hybrid, while Hindu Kush is a heavy&nbsp;Indica. These two strains would make OG Kush a perfect blend for any cannabis user.</p>
        <p>The buds are covered in trichomes that lend them a silvery-white appearance and make them very sticky to the touch — when prepping buds for a joint or a pipe, users may want to use a grinder. When properly cured, the buds have a earthy, musty scent that is accented by some citrusy brightness: the overall impression is of a hoppy craft beer. Burning or breaking open the buds offers more of a pine-like odor. Smoke from OG Kush is commonly harsh and cough-inducing; it may sting the sinuses and cause eyes to water. The smoke tastes hashy and spicy like a classic indica on the inhale and exhale. OG Kush’s pungent funk may linger for a while after a joint has been extinguished — those looking to remain discreet about their smoking should take the proper precautions.</p>
        <p>The high from OG Kush is more head-focused than physical. It starts with a sudden headrush that may lead users to feel more focused on their surroundings; sounds and colors may seem intensified. This alteration of the senses may soon give way to a general uplift in mood that progresses towards euphoria. The increase in focus is not as cerebral as with more pure sativas — smokers will not suffer from a disorienting sense of rapid thought association or “mindrace.” &nbsp;It’s a versatile smoke that lends itself to the user’s mood and mindset The combination of mental stimulation and improvement in mood makes this a uniquely social strain, good for parties and lively conversations. It’s also a great way to enhance activities that involve the body and mind, like video games, exercise, and even sex. OG Kush has medical application as a means to temporarily relieve anxiety and depression by helping users live in the moment. Its sense of focus can also be helpful for those suffering from attention deficit disorders. Some have reported relief from headaches and migraines with this strain as well. As with many sativa varieties, OG Kush has the potential to make users feel paranoid with higher doses.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;</strong>Earthy,&nbsp;Pine,&nbsp;Woody</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Sleepy</p>
        <p><strong>Medical</strong>&nbsp;<strong>Uses:&nbsp;</strong>Stress,&nbsp;Pain,&nbsp;Depression,&nbsp;Insomnia,&nbsp;Headaches</p>
        </div>`,
        price:50,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 199,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Purple Haze (28 Grams)",
        image:"./downloaded-images2/AAA/Purple-Haze-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">						
        <header class="heading--article">
        <section class="padding-listItem divider bottom">
        <div class="description-wrapper">
        <div class="description">
        <p>Popularized by&nbsp;Jimi Hendrix’s 1967 classic, Purple Haze delivers a dreamy burst of&nbsp;euphoria&nbsp;that brings veteran consumers back to their psychedelic heyday. This nostalgic&nbsp;sativa&nbsp;staple remains cherished for its&nbsp;high-energy&nbsp;cerebral stimulation that awakens&nbsp;creativity&nbsp;and blissful&nbsp;contentment&nbsp;throughout the day. Purple Haze is believed to have descended from parent strains&nbsp;Purple Thai&nbsp;and&nbsp;Haze, who pass on a mix of&nbsp;sweet&nbsp;and&nbsp;earthy&nbsp;flavors underscored by notes of&nbsp;berry&nbsp;and sharp&nbsp;spice. Following her 8 to 9 week flowering time, Purple Haze buds typically acquire vibrant hues of lavender that further justify the naming of this strain.</p>
        <p>When properly cured, flowers of Purple Haze give off a dank, musty scent. A second whiff reveals some tart, berry-tinged notes. Meanwhile, grinding up or picking apart these flowers releases an herbal aroma, familiar to fans of Haze. Purple Haze gives off a very smooth and easily ingested smoke when combusted in a pipe or a joint. The smoke tastes sweet and hashy on the exhale. Notably, despite its purple coloring, this strain has no discernible grape flavors; this is because the pigments that determine its color do not have a corresponding effect on its taste.</p>
        <p>Purple Haze tends to work its magic soon after users inhale its flavorful smoke. As with many other sativas, this strain goes right to the head, resulting in side effects like a slight pressure around the temples or a flushing in the cheeks. Once these odd sensations abate, though, users are granted access to a higher plane of thinking in which ideas jump around in free association in surprising new connections. Certain thoughts or ideas may strike the consumer as more interesting than they otherwise might — and might not seem particularly engaging to bystanders who aren’t under a similar influence. As such, Purple Haze can stimulate conversation in social settings with like-minded people, serving as an icebreaker even when used among new acquaintances. Those who aren’t overwhelmed by the cerebral energy that Purple Haze provides may also find them able to ease into a heavy workload, whether it’s open-ended and creative or consists of complicated analytical tasks. After some time passes, this strain’s physical side may creep in bit by bit. Rather than relaxing the user and undoing Purple Haze’s buzzy effects, though, this body high is stimulating and somewhat trippy. Smokers may feel a new connection to their body or a new groundedness. This eventual combination of physical and mental qualities makes this bud a great way to enjoy activities that involve both body and mind, like exercising or gaming. Under the right circumstances and with the right company, Purple Haze can even be an effective aphrodisiac. As the high tapers off after a few hours, you may feel your energy begin to dip — but even so, this strain isn’t likely to make you crash and isn’t recommended for consumption before bedtime.</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Spice,&nbsp;Earthy,&nbsp;Berry</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Relaxed,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Tingly</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Pain,&nbsp;Stress,&nbsp;Lack of Appetite,&nbsp;Fatigue,&nbsp;Depression</p>
        <p>&nbsp;</p>
        </div>
        </div>
        </section>
        </header>
        </div>`,
        price:300,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Trainwreck (28 Grams)",
        image:"./downloaded-images2/AAA/train-Wreck-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Trainwreck</strong>&nbsp;is a mind-bending&nbsp;hybrid&nbsp;with potent&nbsp;sativa&nbsp;effects that hit like a freight train.&nbsp;Mexican and&nbsp;Thai&nbsp;sativas were bred with&nbsp;Afghani&nbsp;indicas to produce this Northern California staple, passing on a&nbsp;sweet&nbsp;lemon&nbsp;and&nbsp;spicy&nbsp;pine&nbsp;aroma.&nbsp;<strong>Trainwreck</strong>&nbsp;begins its speedy hurtle through the mind with a surge of&nbsp;euphoria, awakening&nbsp;creativity&nbsp;and&nbsp;happiness.&nbsp;Migraines,&nbsp;pain, and&nbsp;arthritis&nbsp;are mowed down by Trainwreck’s high THC content, and many patients also use it for relief of&nbsp;anxiety,&nbsp;ADD/ADHD, and&nbsp;PTSD. The flowers finish up in early October outdoors, while indoor gardens are ready for harvest 8 weeks into flowering.</p>
        <p>This strain was supposedly the creation of two Californian brothers back in the late 1970s. It is a mix of three other strains Thai (Sativa), Mexican (Sativa) and Afghani (Indica). In its true form, Trainwreck is ninety percent Sativa and only ten percent Indica. As the story goes the two brothers had to pull their crop early because there was a nasty train wreck that happened near their grow site and they didn’t want it discovered,&nbsp;thus the name.</p>
        <p>Trainwreck can grow well both indoors and outdoors. Plants of this strain grow fairly tall but the Indica in them causes them fill out well. Inside grown in hydro a single plant can yield up to 500 grams in a square meter. When grown in soil outside Trainwreck plants are ready for harvesting early October and can yield up to 700 grams. This strain flowers somewhere between eight and ten weeks.</p>
        <p>For the longest time Trainwreck was only available in clone form but more recently a few places have been able to recreate seeds of the strain. There are several others that have tried to imitate the strain under the same name, some with great success. The buds give off a strong citrus smell as they ripen.</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Uplifted,&nbsp;Energetic</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Fatigue,&nbsp;Lack of Appetite</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>&nbsp;–&nbsp;</strong>Earthy,&nbsp;Lemon,&nbsp;Pine</p>
        <p>&nbsp;</p>
        </div>`,
        price:250,
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"White Russian",
        image:"./downloaded-images2/AAA/white-russian-3-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>White Russian</strong>&nbsp;is a indica dominant strain which comes from the cross of two legendary strains, white widow and AK-47. This strain won the best overall in 1996 at the high times cannabis cup. This flower is known to leave you stuck on the couch if you over consume.&nbsp;The high from this strain takes hold almost immediately in the form of some initial disorientation and tightening around the temples. Users report feeling quickly energized and motivated, and being able to function with more clarity than confusion. As is characteristic of parent strain White Widow, White Russian has an intensely cerebral high that can lend itself to introspection, lateral thinking for problem solving, and creative inspiration. A sense of euphoria and emotional well-being can accompany this mental stimulation. Despite some indica in its genetics, this strain carries very little physical effects — although, as with any variety of cannabis, heavy consumption can lead to couch lock and drowsiness. White Russian’s powerful head high makes it effective in treating anxiety and depression. It is also particularly beneficial for users with attention deficit disorders. Red, dry eyes are a common side effect, a result of the high THC in this strain dilating blood vessels and capillaries controlling blood flow to the eyes. Because of its cerebral intensity, White Russian also has the potential to veer into paranoid or anxious territory; users should consider their individual tolerance as well as their mindset and setting before enjoying this strain. More likely to leave you wired than lazy, White Russian is definitely a strain to be enjoyed during the daytime.</p>
        <p>Plants of White Russian may be user-friendly for even novices to grow; the strain’s hearty genetics mean that it is more resistant to adverse growing conditions and not as high-maintenance as many other strains. That said, growing this variety outdoors requires a consistently warm temperature and a direct albeit not overpowering source of sunlight. Plants are relatively short and bushy for a sativa-dominant variety, reaching between 3 and 4 feet tall when grown indoors. Plants also have a low leaf-to-flower ratio, meaning that cultivators won’t need to worry as much about trimming fan leaves during the vegetative state. Grown indoors, plants flower after 8 to 9 weeks. Outdoors, plants are ready for harvest in mid to late October.</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Relaxed,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Energetic</p>
        <p><strong>Medical Benefits:</strong>&nbsp;Anxiety,&nbsp;Pain,&nbsp;Nausea,&nbsp;Depression,&nbsp;Headaches</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Earthy,&nbsp;Fruity,&nbsp;Spicy</p>
        <p>&nbsp;</p>
        </div>`,
        price:54,
        options:[
            {
                name: "7 Grams",
                price: 54,
            },
            {
                name: "14 Grams",
                price: 114,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ],
        category:"AAA",
        countInStock: 30,
    },
    {
        name:"Jedi  Kush",
        image:"./downloaded-images2/AAAA/Jedi-Kush-2-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Cali Connection’s&nbsp;<strong>Jedi Kush Strain</strong>&nbsp;brings together the forces of&nbsp;Death Star&nbsp;and&nbsp;SFV OG&nbsp;Kush, an&nbsp;indica&nbsp;alliance that will awaken both mind and body. Jedi Kush’s timid aroma isn’t fully realized until a bud is cracked open, releasing a complex fusion of sour&nbsp;skunk&nbsp;and tangy&nbsp;diesel. Dreamy&nbsp;euphoria&nbsp;blankets the mind, a sensation that builds over time into bolting cerebral&nbsp;energy&nbsp;that’s unexpected from our&nbsp;indicas. This lethargy-free strain is a great way for patients to get a powerful dose of&nbsp;cannabinoids&nbsp;during the day while treating ailments like&nbsp;pain,&nbsp;PTSD,&nbsp;depression,&nbsp;stress,&nbsp;headaches, and&nbsp;appetite loss. Jedi plants&nbsp;show resilience in outdoor gardens but also thrive indoors with a flowering time of 8 to 9 weeks.</p>
        <p dir="ltr">When properly cured, flowers of Jedi Kush carry the prominent scent of diesel fumes — this aroma was likely passed on from parent strain Death Star, which has Sour Diesel in its background. On closer inspection, the buds also have a damp, earthy scent, somewhat like of moist soil after a rainstorm. Grinding up or breaking open these buds yields sharp, skunky notes. When combusted, Jedi Kush burns with a harsh, acrid smoke that may sting the palate and sinuses, causing coughing and watery eyes. Those looking to keep their consumption discreet may want to take a few precautions, as this strain can be a particularly pungent smoke.</p>
        <p dir="ltr">Jedi Kush offers a slow, creeping high. It may be several minutes after smokers have enjoyed its complex flavor combination before they begin to feel a gradual warping of their sensory perception. Sights and sounds may take on a new dimension; users also describe a powerful sense of time dilation. Once consumers acclimate, though, they can point this high in any direction they might want. It can inspire creativity as well as deep analysis for work on problem-oriented tasks. Alternatively, Jedi Kush can be great for spacing out and daydreaming while enjoying one’s surroundings. In addition to these cerebral vibes, a slight, tingling body high leaves smokers with newfound energy and motivation — this combination of mental and physical effects is great for activities that involve both, like exercise, dancing, and even sex. Although it’s largely not sleepy, increasing dosage can eventually bring about couchlock. Jedi</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Sleepy,&nbsp;Happy,&nbsp;Uplifted,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Pain,&nbsp;Depression,&nbsp;Stress,&nbsp;Headaches,&nbsp;Muscle Spasms</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Flowery</p>
        <p>&nbsp;</p>
        </div>`,
        price:55,
        options:[
            {
                name: "7 Grams",
                price: 55,
            },
            {
                name: "14 Grams",
                price: 110,
            },
            {
                name: "28 Grams",
                price: 215,
            }
        ],
        category:"AAAA",
        countInStock: 30,
    },
    {
        name:"Pink Kush (28 Grams)",
        image:"./downloaded-images2/AAAA/Pink-Kush-4-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">
        <section class="padding-listItem divider bottom">
        <div class="description-wrapper">
        <div class="description">
        <p>The heritage of the&nbsp;<strong>Pink Kush</strong>&nbsp;<strong>strain</strong>&nbsp;is a little uncertain, but it’s known to be a relative and possibly an offspring of the legendary&nbsp;<em>OG Kush</em>, one of history’s most popular indica strains.&nbsp;<em>Pink Kush</em>&nbsp;carries on the legacy, delivering a potent body high that’s very effective as medical treatment. The effects are calming and intensely euphoric, with happiness and a powerful case of the munchies. It’s a versatile tool for treating anxiety, depression, inflammation, lack of appetite, migraines and other headaches, mood disorders, chronic pain, and insomnia. The sativa/indica ratio of this strain is hard to verify, but appears to be as low as 10:90, meaning strong physical effects.</p>
        <p>THC tests are scarce, but the few that are publicly available suggest fairly high potency, topping 20%. CBD levels are reportedly much lower, less than 1%, so this isn’t an ideal choice for treating conditions that respond to that chemical, including epileptic disorders. The flavor and aroma of&nbsp;<strong>Pink Kush</strong>&nbsp;are similar, with notes of pine, wood, and flowers. The strain gets its name in part from the pink hairs that punctuate its green nugs. It’s most popular on the legal markets of the Pacific Northwest and Canada.</p>
        <p>Medical patients tend to gravitate toward Pink Kush for its overwhelming body effects that work to combat physical pain, migraines, and nausea. Used frequently to overcome stress, anxiety, and extreme nervousness, it’s a great way to calm yourself down and enjoy a carefree day. If used later in the evening, smoking a decent amount of this strain will lull you into a deep sleep.</p>
        <p>As if it couldn’t get any better, Pink Kush is also pretty easy to grow, with plants that produce high yields and are resistant to common molds. The only potential complaint about this gal is that it takes 10 to 11 weeks for her to flower, which for some people can feel like an eternity. Cultivate Pink Kush inside or outdoors for a strain that’s robust and great smelling.</p>
        <p>&nbsp;</p>
        <p><strong>Effects –&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Sleepy,&nbsp;Uplifted</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Lack of Appetite</p>
        <p><strong>Flavours –&nbsp;</strong>Sweet,&nbsp;Flowery,&nbsp;Earthy</p>
        <p>&nbsp;</p>
        </div>
        </div>
        </section>
        </header>
        </div>`,
         price:250,
        category:"AAAA",
        countInStock: 30,
    },
    {
        name:"Sour  Diesel",
        image:"./downloaded-images2/AAAA/Sour-Diesel-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Sour Diesel Strain</strong>, sometimes called Sour D, is an invigorating sativa-dominant strain&nbsp;named after its&nbsp;pungent,&nbsp;diesel-like aroma. This fast-acting strain delivers&nbsp;energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.&nbsp;Stress,&nbsp;pain, and&nbsp;depression&nbsp;fade away in long-lasting relief that makes&nbsp;<em>Sour Diesel</em>&nbsp;a top choice among medical patients. This strain&nbsp;took root in the early 90’s, and it is believed to have descended from&nbsp;Chemdawg 91&nbsp;and&nbsp;Super Skunk.</p>
        <p><strong>Sour Diesel</strong>&nbsp;has round, medium-sized buds with leaves that appear yellowish-green. Red hairs called pistils, structures that operate to catch pollen from male plants, contrast with the densely-packed leaves. When properly cured, the flowers are somewhat sticky — the dusting of trichomes is not as immediately obvious as it is on more resinous strains like&nbsp;White Widow. Nevertheless, breaking open buds reveals trichomes coating the insides of the dense flowers. The buds have an overpowering smell that, true to this strain’s name, is very similar to gasoline. The odor also has some hints of orange. Breaking open or grinding the buds intensifies this scent, and adds components of musk and pine sap. Sour Diesel has a notoriously harsh, acrid smoke that can cause users to cough or make their sinuses water. The smoke has a sour and vaguely skunky taste that may describe as unpleasant; on the exhale, the diesel and almost ammonia-like tang stings the palate and may linger for a long time afterward. Smokers trying to remain discreet should be warned that this is a very pungent strain whose odor can carry for quite a distance.</p>
        <p>Sour Diesel has round, medium-sized buds with leaves that appear yellowish-green. Red hairs called pistils, structures that operate to catch pollen from male plants, contrast with the densely-packed leaves. When properly cured, the flowers are somewhat sticky — the dusting of trichomes is not as immediately obvious as it is on more resinous strains like&nbsp;White Widow. Nevertheless, breaking open buds reveals trichomes coating the insides of the dense flowers. The buds have an overpowering smell that, true to this strain’s name, is very similar to gasoline. The odor also has some hints of orange. Breaking open or grinding the buds intensifies this scent, and adds components of musk and pine sap. Sour Diesel has a notoriously harsh, acrid smoke that can cause users to cough or make their sinuses water. The smoke has a sour and vaguely skunky taste that many describe as unpleasant; on the exhale, the diesel’s almost ammonia-like tang stings the palate and may linger for a long time afterward. Smokers trying to remain discreet should be warned that this is a very pungent strain whose odor can carry for quite a distance.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;</strong>Citrus,&nbsp;Lemon,&nbsp;Earthy</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Energetic,&nbsp;Creative</p>
        <p><strong>Medical:&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Fatigue,&nbsp;Pain,&nbsp;Headaches</p>
        </div>`,
        price:80,
        options:[
            {
                name: "7 Grams",
                price: 80,
            },
            {
                name: "14 Grams",
                price: 115,
            },
            {
                name: "28 Grams",
                price: 240,
            }
        ],
        category:"AAAA",
        countInStock: 30,
    },
    {
        name:"Wedding  Cake (14 Grams)",
        image:"./downloaded-images2/AAAA/Wedding-Cake-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Wedding Cake</strong>&nbsp;is a&nbsp;hybrid&nbsp;with indica-dominance. It is attained by crossing triangle cookies x animal mints. It gives an exceptionally sweet aromatic essence and a fruity flavour. The taste is a perfect combination of sweetness of&nbsp;cookies&nbsp;and fruitiness of a cherry pie. It works as a calming agent and appetite stimulator, and is quite helpful for patients who experience regular depression-associated syndromes, fibromyalgia, MS and other such related symptoms. It may act as a sedative for patients, but does help in calming down nerves or controlling anxiety stimulating symptoms. Although it might not completely hamper your focus and energy levels, it will cause the usual drying out of eyes and mouth.&nbsp;<em>Wedding Cake</em>&nbsp;particular&nbsp;medical marijuana&nbsp;is grown indoors. It is observed to contain a THC level of 14-18% and a CBD level of 0.23%. In terms of physical features, it is shaped like pine trees and looks dense in its structural form. It is quite frosty looking and has dark green leaves. This particular medical marijuana is also thickly dressed up with orange hair all over it. It is most generally known for its sugary taste, as well as high potency value.</p>
        <p>This strain’s high starts relatively quickly, taking hold primarily in the head. Users may find their thoughts to be more fast-paced or intense, and may perceive their surroundings more acutely. In the right set and setting, this change in thinking is accompanied by feelings of giddiness or euphoria. Less than an hour into the high, Wedding Cake’s indica side kicks in. Smokers might feel increased warmth and a pleasant heaviness that spreads through the spine and limbs. Even in the midst of this sedation, though, cerebral stimulation continues, allowing users to feel uniquely “tuned in” to their surroundings. This holistic combination of mental and physical effects lends itself to complex activities like creating art, exercising, and even sex. As the high progresses, so does this strain’s body high — after a few bowls, smokers may find themselves couchlocked.</p>
        <p>Wedding Cake may also be of use to medical cannabis patients. Its tendency to bring about feelings of perceptiveness can aid those with mild to moderate stress, anxiety, and depression, helping them feel more “in the moment.” Because this strain leaves users lucid and levelheaded, it can also help those with attention deficit disorders to focus on specific tasks. Wedding Cake’s gradual waves of physical relaxation can soothe both temporary and chronic aches and pains and, in high enough doses, can bring about relief for insomnia. Finally, it can be a potent appetite stimulant for those who have lost their hunger to disease, medication, or chemotherapy.</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Lack of Appetite</p>
        <p><strong>Flavours:&nbsp;</strong>Sweet,&nbsp;Earthy,&nbsp;Vanilla</p>
        </div>`,
        price:150,
        category:"AAAA",
        countInStock: 30,
    },
    {
        name:"Array CBD Capsules",
        image:"./downloaded-images2/CBD/Array-CBD-Capsules-High-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Array CBD Capsules</strong>&nbsp;are lab tested in a Health Canada approved testing facility. They come in variations of low doses to high, to find the right dosage suitable for you. Each bottle contains 30 capsules. These are&nbsp;<strong>THC FREE!&nbsp;</strong></p>
        <p><strong>Doses:&nbsp;</strong></p>
        <ul>
        <li>5mg (150mg per bottle)</li>
        <li>10mg (300mg per bottle)</li>
        <li>25mg (750mg per bottle)</li>
        </ul>
        <p>&nbsp;</p>
        <p><strong>Ingredients:&nbsp;</strong>CBD oil, Cocoa butter, Gelatin capsule</p>
        </div>`,
        price:35,
        options : [
            {
                name: "5mg (150mg per bottle)",
                price: 35,
            },
            {
                name: "10mg (300mg per bottle)",
                price: 55,
            },
            {
                name: "25mg (750mg per bottle)",
                price: 105,
            } 
        ],
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Cannalife  Full Spectrum 1000mg CBD Tincture",
        image:"./downloaded-images2/CBD/CannaLife-CBD-Tincture-1000mg-full-spectrum-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Cannalife&nbsp;</strong><b>Full Spectrum CBD Tincture!&nbsp;</b>CBD&nbsp;Cannabidiol is one of the main active ingredients in Cannabis but does not have the intoxicating effect of THC.</p>
        <p><strong>CBD</strong>&nbsp;products may help inflammation, pain, anxiety, insomnia, psychosis, seizures, spasms and more&nbsp;without the feelings of lethargy or&nbsp;the “high” associated with THC.</p>
        <p>&nbsp;</p>
        <p><strong>Keep Tinctures Refrigerated&nbsp;</strong></p>
        <p><strong>Each order Includes One 30ml tincture containing 1000mg of CBD | Each Dropper is 1ml / 33.3mg CBD</strong></p>
        </div>`,
        price:125,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Cannalife CBD  Tincture",
        image:"./downloaded-images2/CBD/Cannalife-CBD-tincture-600x600-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Cannalife</strong>&nbsp;<strong>CBD Tincture!&nbsp;</strong>CBD Cannabidiol is one of the main active ingredients in Cannabis but does not have the intoxicating effect of&nbsp;<strong>THC</strong>.</p>
        <p><strong>CBD</strong>&nbsp;products may help inflammation, pain, anxiety, insomnia, psychosis, seizures, spasms and more&nbsp;without the feelings of lethargy or&nbsp;the “high” associated with THC.</p>
        <p>&nbsp;</p>
        <p><strong>Keep Tinctures Refrigerated&nbsp;</strong></p>
        <p><strong><b>Available in 32ml/360mg CBD and 10ml/120mg CBD</b></strong></p>
        </div>`,
        price:100,
        options:[
            {
                name: " 32ml/360mg",
                price: 100,
            },
            {
                name: "10ml/120mg CBD",
                price: 30,
            }
        ],
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Cannalife Muscle Rub",
        image:"./downloaded-images2/CBD/Cannalife-Muscle-Rub-70ML-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Muscle Rub</strong>&nbsp;by&nbsp;<strong>Cannalife&nbsp;</strong>is formulated with soothing analgesic essential oils in combination with Cannabis, CBD and Arnica to ease aches and pains and promote a cooling effect to applied areas.</p>
        <p><strong>Sizes:&nbsp;</strong></p>
        <ul>
        <li>10ml</li>
        <li>70ml</li>
        </ul>
        <p><strong>Ingredients:</strong></p>
        <p>Organic Coconut Oil, Cannabis, Arnica, Shea Butter, CBD, essential oils of Wintergreen, Peppermint, Eucalyptus, Camphor, Black Pepper, Lavender and Nutmeg. *All ingredients are top quality and organic when available. please inquire</p>
        </div>`,
        price:15.00,
        options:[
            {
                name: "10ml",
                price: 15,
            },
            {
                name: "70ml",
                price: 49,
            },
        ],
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mary’s 1000mg   CBD Tincture",
        image:"./downloaded-images2/CBD/Marys-1000mg-CBD-Tincture.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 1000mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 1000mg CBD with a dropper of 1ml/20mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>1000mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:80,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mary’s 500mg  CBD Tincture",
        image:"./downloaded-images2/CBD/Marys-500mg-CBD-Tincture-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 500mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 500mg CBD with a dropper of 1ml/10mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>500mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:45,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mary’s Edibles 20mg CBD Isolate  Capsules",
        image:"./downloaded-images2/CBD/marys-edibles-cbd-isolate-capsules-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s Edibles 20mg CBD Isolate Capsules</strong>&nbsp;are excellent for daytime pain and anxiety maintenance. They provide pain and anxiety relief without the cerebral effects of THC. They are also great for getting a good night’s sleep! Mary’s Edibles uses Canadian grown hemp and lab tests all of their products in a Health Canada Approved facility. Each easy to swallow gelatin capsule contains 20mg of CBD.</p>
        <p><strong>Every bottle contains 25mg capsules which have 20mg of CBD each</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>CBD Isolate, Grape Seed Oil</p>
        </div>`,
        price:60,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mota 100mg  CBD White Clear Sphere",
        image:"./downloaded-images2/CBD/Mota-CBD-Sphere-600x600-510x510-1.jpg",      
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>This tasty jelly, made with&nbsp;CBD distillate&nbsp;really packs a punch.&nbsp;<strong>Mota’s 100mg CBD White Clear Sphere</strong>&nbsp;is easily one of the tastiest and strongest CBD edibles around! It can easily be cut into 5 equal 20 mg pieces for accurate dosing. Or if you think you are up for it eat it all at once. Proudly produced and lab tested in B.C.</p>
        <p><strong>Ingredients:</strong>&nbsp;CBD Distillate, corn syrup, sugar , gelatin, citric acid, sorbitol, natural and artificial flavours and colours, coconut oil and carnauba wax</p>
        <p><strong>Strength:</strong>&nbsp;100mg CBD</p>
        <p>Start slow when consuming edibles, effects may be delayed and strong!</p>
        </div>`,
        price:19.00,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mota 1000 mg CBD Tincture",
        image:"./downloaded-images2/CBD/MOTA-CBD1000-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1000 mg CBD Tincture&nbsp;</strong>is perfect for those looking to medicate using CBD with higher dosages.&nbsp;<em>CBD</em>&nbsp;provides no psychoactive effects that you would find from THC. Anyone looking to alleviate pain, inflammation, arthritis, muscle spasms, insomnia, epilepsy and more should focus on adding CBD to their daily diet.</p>
        <p><strong>Shake Well and Ingest Orally</strong></p>
        <p><strong>Each 30ml bottle contains 1000mg of CBD – One full 1ml dropper contains 33.3mg of CBD</strong></p>
        <p><strong>Ingredients:</strong> Organic grapeseed oil, organic hempseed oil, organic virgin coconut oil, organic orange oil, stevia extract.</p>
        </div>`,
        price:95.00,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Mota 300 mg CBD  Sour Squares",
        image:"./downloaded-images2/CBD/Mota-CBDSourSquares-300x300-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 300 mg CBD Sour Squares</strong>&nbsp;are fruit flavoured gummies which make an excellent choice for those looking to slowly dose throughout the day. Each gummy is infused precisely infused with CBD to provide accurate dosages. These flavourful squares are all you need to combat symptoms of pain, nausea or stress during the day.</p>
        <p><strong>Each 300mg package contains 15 gummies which have 20mg of CBD each</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>Corn Syrup, Water, Cornstarch, Citric Acid, Natural and Artificial Flavors, CBD isolate, Artificial Colour</p>
        </div>`,
        price:20.00,
        category:"CBD",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Alien OG Shatter",
        image:"./downloaded-images2/CONCENTRATES/Alien-OG.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>First available as a clone in California’s Bay Area and now in seed form from Cali Connection,&nbsp;<strong>Alien OG Shatter&nbsp;</strong>by&nbsp;<strong>Phyto Extractions</strong>&nbsp;is a cross of Tahoe OG and Alien Kush. One of the most potent strains available today, this&nbsp;indica-dominant hybrid has tested as high as 28% THC. It has the typical lemon-pine “OG” smell and flavor, and an intense high that combines heavy indica body effects and a psychedelic cerebral buzz. Beginners and novices, be sure to take it slow with this heavy-hitter.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours –</strong>&nbsp;<a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lemon/" target="_blank" rel="noopener">Lemon</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a></p>
        <p><strong>Effects –</strong>&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a></p>
        <p><strong>Medical Uses –</strong>&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a></p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Atomic Concentrates Atomic Haze Shatter",
        image:"./downloaded-images2/CONCENTRATES/Atomic-Haze.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Atomic Concentrates Atomic Haze Shatter</strong>&nbsp;is an 80/20&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa-dominant strain</a>, a cross between&nbsp;Haze, an&nbsp;Indian sativa, and Sweet Afghan, you will first notice the smell and taste of kiwi and finish off with that classic spicy Haze flavor. A long-lasting buzz will having you feeling motivated and ready for what the day brings. It has these resin-caked buds that will be ready for harvest in about 9 weeks and are ideal for indoor gardens.&nbsp;<strong>Atomic Concentrates</strong>&nbsp;makes some of the best shatter&nbsp;on the market!</p>
        <p>Each package comes with 1 Gram of<strong>&nbsp;Atomic Concentrates Shatter</strong></p>
                        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Atomic Concentrates Cookie Dough Shatter",
        image:"./downloaded-images2/CONCENTRATES/Atomic_CookieDough.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Atomic Concentrates Cookie Dough Shatter</strong>&nbsp;is a wonderfully potent&nbsp;<a href="https://buylowgreen.com/product/girl-scout-cookies/" target="_blank" rel="noopener">Girl Scout Cookies</a>&nbsp;phenotype. This particular version of the West Coast’s most popular strain exhibits an orange/yellowish sheen of trichomes and a pungent doughy aroma.&nbsp;<strong>Cookie Dough</strong>’s effects align closely with GSC’s, offering medical-grade sedation on the body and a well-lit mind that borders on speedy. Enjoy this strain as a means to stimulate appetite and dull physical pain while remaining mentally alert. Beginners beware, as this potent phenotype can be overwhelming. Negative effects such as mild dizziness and dry eyes have been noted by some consumers.</p>
        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Atomic Concentrates Space Bomb Shatter",
        image:"./downloaded-images2/CONCENTRATES/Atomic_SpaceBomb.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Atomic Concentrates Space Bomb Shatter&nbsp;</strong>is 60%&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa strain</a>&nbsp;is a cross between the clone-only Tiny Bomb and&nbsp;Space Queen&nbsp;and was bred at least in part to produce the qualities of Tiny Bomb in seed form. Available since 2006, this strain is the work of TGA Seeds and placed in the Top 10 at the 2009 High Times Cannabis Cup.&nbsp;<strong>Atomic Concentrates</strong>&nbsp;uses&nbsp;<strong>Space Bomb</strong>&nbsp;which produces beautiful lime green buds with orange throughout to make some of the most wonderful shatters on the market. The buds will have a fruit candy smell with a little bit of that sweet-rot smell when they flower at 7-8 weeks—a true speed queen for a sativa. Yields will be average, but the buds are potent and covered in trichomes.</p>
                        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Smyle CBD V-Liquid 200mg E-Juice",
        image:"./downloaded-images2/CONCENTRATES/bottles-247x247-12.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Does this get you high? NO! This a non-psychoactive, all natural&nbsp;<b>Smyle CBD V-Liquid 200mg 400mg E-Juice&nbsp;</b>is the perfect option for those looking for&nbsp;<a href="https://herbapproach.com/product-category/cbd/" target="_blank" rel="noopener">CBD</a>&nbsp;product that absorbs and takes effect faster than traditional creams or&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">edibles</a>, all while tasting great using&nbsp;<strong>Smyle’s</strong>&nbsp;all natural flavours.</p>
        <p><strong>200mg of CBD in 15ml of E-Juice</strong></p>
        <p><strong>Only to Be Used with E-Juice Vaporizers</strong></p>
        <p><strong>Available in 4 Flavours:</strong></p>
        <ul>
        <li><strong>Winter</strong></li>
        <li><strong>Lemon Lime</strong></li>
        <li><strong>Orange</strong></li>
        <li><strong>Natural</strong></li>
        </ul>
                        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Wonka Candy Cane Shatter",
        image:"./downloaded-images2/CONCENTRATES/Candy-Cane.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><em><strong>Candy Cane Shatter</strong>&nbsp;</em>by&nbsp;<strong>Wonka Extracts</strong>&nbsp;is a mostly indica hybrid with a complicated genetic background and a robust flavor profile to match. Created by the Vancouver-based Crop King Seeds, it is a cross between landrace-derived AK-47, fruity&nbsp;Mango, and the notoriously resinous White Widow. With a balanced high that can lean in whichever direction the user prefers,&nbsp;<strong>Candy Cane</strong>&nbsp;scores points for its potent and long-lasting effects. This strain carries between 15% and 20% THC.</p>
        <p><strong>1 Gram of Shatter</strong></p>
        </div>`,
        price:30.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Wonka Candy Jack Shatter",
        image:"./downloaded-images2/CONCENTRATES/Candy-Jack-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Candy Jack Shatter</strong>&nbsp;by&nbsp;<em>Wonka Extracts</em>&nbsp;is the super-potent end result of a crossbreed between the famed sativa Jack Herer and the sativa-dominant Cotton Candy. This Cannabis Cup winner has THC levels that can hit 27%, making it easily one of the strongest strains in the world. CBD content, on the other hand, is low, less than 1%. The sativa genes dominate in Candy Jack, as they do in its parent strains (the exact ratio of sativa to indica in<strong>&nbsp;Candy Jack</strong>&nbsp;<strong>Shatter</strong>&nbsp;is unknown). That means a strong, peppy, energetic cerebral high with creativity and a shot of euphoria.</p>
        <p><strong>1 Gram of Shatter</strong></p>
        </div>`,
        price:30.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Sugar Shack Live Resin",
        image:"./downloaded-images2/CONCENTRATES/download-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Sugar Shack</strong>&nbsp;<strong>Live Resin&nbsp;</strong>is a moderate, indica-dominant hybrid. Great for nighttime or evening use, this strain provides users with a mild head and body-heavy sensation. Be careful, though, because too much Sugar Shack will put you right to sleep. If you’re looking to increase appetite,&nbsp;<strong>Sugar Shack</strong>&nbsp;is also a great strain to try. Like its name suggests, this strain features a slightly sweet taste and scent that verges on piney and herbal. A good strain for beginning cannabis users, Sugar Shack is mild yet gets the job done.</p>
        <p><strong>1 Gram of Live Resin</strong></p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish Nuken Rosin",
        image:"./downloaded-images2/CONCENTRATES/download-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Nuken Rosin</strong>&nbsp;by&nbsp;<strong>Squish Extracts</strong><strong>&nbsp;</strong>is a cross between a God Bud female and a Kish male. God Bud is of course one of the world’s most demanded purple skunk strains;has sweet flavours with lineage from Grapefruit, Blueberry and South African&nbsp;<strong>Sativa</strong>.&nbsp; This&nbsp;<strong>indica&nbsp;</strong>has a purple hue, fruity and spicy flavors, and a THC content that tends to fall between 15-20%.<strong>&nbsp;Diablo</strong>&nbsp;has an indoor flowering time of 6-7 weeks and took second place at the 2002 BC Harvest Cup in the outdoor category.</p>
        <p><strong>1 Gram of Rosin</strong></p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish MK Ultra Rosin",
        image:"./downloaded-images2/CONCENTRATES/download-3.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>MK Ultra Rosin</strong>&nbsp;by&nbsp;<strong>Squish Extracts</strong><strong>&nbsp;</strong>named after the methods of mental manipulation employed by the CIA’s Project, this&nbsp;<strong>indica</strong>-dominant&nbsp;<strong>strain</strong>&nbsp;stands apart due to its powerful cerebral effects. A cross between mostly-<strong>sativa</strong>&nbsp;<strong>hybrid</strong>&nbsp;<strong>OG Kush</strong>&nbsp;and&nbsp;<strong>indica</strong>&nbsp;G-13, this&nbsp;<strong>strain</strong>&nbsp;is bred by TH Seeds and won 1st place&nbsp;<strong>Indica</strong>&nbsp;at the High Times Cannabis Cup in 2003 and 2nd place in 2004. Indoor growing is facilitated by the plant’s short stature, and its above average yield delivers particularly sticky, dense, pungent flowers.&nbsp;<strong>MK Ultra Rosin</strong>&nbsp;is renowned for its ‘hypnotic’ effects that are fast-acting and best used when strong medication is desired. As evidenced by its collection of awards, this&nbsp;<strong>indica</strong>&nbsp;is one of the strongest in the world. It might be best for a day when not getting off the couch would be fine.</p>
        <p><strong>1 Gram of Rosin</strong></p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Death Bubba Live Resin",
        image:"./downloaded-images2/CONCENTRATES/download.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Death Bubba Live Resin</strong>, extracted from the bud bread by Matteo Suleyman of Vancouver BC’s&nbsp;Sea to Sky. Created by crossing Death Star and Bubba Kush, this pungent pairing reeks of grass and skunk while the smoke is sweet, earthy, and clean on the palate. Its semi-sedative effects lock the consumer to the couch, unknotting tension and soothing minor physical discomfort with ease. This stinky BC native has been serving cannabis enthusiasts since 2012.</p>
        <p><strong>1 Gram of Live Resin</strong></p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Firerock Extracts Cookie Dough Shatter",
        image:"./downloaded-images2/CONCENTRATES/Firerock-Cookie-Dough-e1537488231609-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Firerock Extracts Cookie Dough Shatter</strong>&nbsp;is a wonderfully potent&nbsp;<a href="https://buylowgreen.com/product/girl-scout-cookies/" target="_blank" rel="noopener">Girl Scout Cookies</a>&nbsp;phenotype. This particular version of the West Coast’s most popular strain exhibits an orange/yellowish sheen of trichomes and a pungent doughy aroma.&nbsp;<strong>Cookie Dough</strong>’s effects align closely with GSC’s, offering medical-grade sedation on the body and a well-lit mind that borders on speedy. Enjoy this strain as a means to stimulate appetite and dull physical pain while remaining mentally alert. Beginners beware, as this potent phenotype can be overwhelming. Negative effects such as mild dizziness and dry eyes have been noted by some consumers.</p>
                        </div>`,
        price:40,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Firerock Extracts Deadhead OG Shatter",
        image:"./downloaded-images2/CONCENTRATES/Firerock-Dead-Head-OG-600x600-e1537491212694.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Firerock Extracts</strong>&nbsp;<strong>Deadhead OG Shatter</strong>&nbsp;is a crossing two already legendary&nbsp;<a href="https://buylowgreen.com/shop" target="_blank" rel="noopener">strains</a>,&nbsp;Chemdawg&nbsp;91&nbsp;and the&nbsp;SFV OG Kush. &nbsp;Known as a very hearty and pungent strain, most&nbsp;phenotypes&nbsp;present an earthy, piney smell and taste, though some can lean more to the diesel aromas of the SFV. &nbsp;As a cross of two very potent strains,&nbsp;<strong>D</strong><strong>ead head OG</strong>&nbsp;regularly reaches THC levels over 20%. &nbsp;Most users describe the high as cerebral and stimulating but with a relaxed body feel.</p>
        <p>Each package comes with 1 Gram of&nbsp;<strong>Deadhead OG Shatter&nbsp;</strong>from&nbsp;<strong>Firerock Extracts.&nbsp;</strong>Made in B.C.</p>
        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy Refill Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Flight-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>Welcome to the result of years spent exploring multiple forms of cannabis oil and vaporizer tanks.&nbsp;<strong>Bob/</strong><strong>Keyy Refill Cartridge</strong>&nbsp;are developed with a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a&nbsp;<a href="https://buylowgreen.com/product-category/vaporizers/" target="_blank" rel="noopener"><strong>vape pen</strong></a>&nbsp;design that quickly vaporizes the thickest and most purified oil. (<em>Not recommended for use with other pen systems.)</em></p>
        <p>Choose from&nbsp;<b>8</b>&nbsp;classic and satisfying flavours!</p>
        <p><strong>Flavours Include</strong></p>
        <ul>
        <li>Grapefruit Haze</li>
        <li>Blueberry</li>
        <li>Green Crack God</li>
        <li>Pineapple</li>
        <li>Peppermint</li>
        <li>Mango</li>
        <li>Tangerine</li>
        <li>Sour Diesel</li>
        </ul>
        </div>`,
        price:50,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy Vaporizer Pen",
        image:"./downloaded-images2/CONCENTRATES/flyte-vape-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Bob/Keyy Vaporizer Pen Kit</strong>&nbsp;consists of one cartridge, one battery and one charger. Cartridge contains 0.8ml Keyy oil.&nbsp;<em>The bob/Keyy pen</em>&nbsp;and cartridge are the result of years spent exploring multiple forms of<a href="https://buylowgreen.com/shop" target="_blank" rel="noopener">&nbsp;cannabis</a>&nbsp;oil and vaporizer tanks. We developed a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a pen vaporizer design that quickly vaporizes the thickest and most purified oil.</p>
        <p>* To activate the battery press button 3 times and 5 times to deactivate.</p>
        <p><strong>Flavours Include</strong></p>
        <ul>
        <li><strong>Blue Dream</strong></li>
        <li><strong>Blueberry</strong></li>
        <li><strong>White Widow</strong></li>
        <li><strong>Clementine</strong></li>
        <li><strong>Gelato</strong></li>
        <li><strong>Pineapple Diesel</strong></li>
        <li><strong>Watermelon</strong></li>
        </ul>
        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy  Vaporizer Pen",
        image:"./downloaded-images2/CONCENTRATES/GoldBud_Catalogue_PhytoExtractions-gorillaglue4-900x900-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>The&nbsp;<strong>Bob/Keyy Vaporizer Pen Kit</strong>&nbsp;consists of one cartridge, one battery and one charger. Cartridge contains 0.8ml Keyy oil.&nbsp;<em>The bob/Keyy pen</em>&nbsp;and cartridge are the result of years spent exploring multiple forms of<a href="https://buylowgreen.com/shop" target="_blank" rel="noopener">&nbsp;cannabis</a>&nbsp;oil and vaporizer tanks. We developed a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a pen vaporizer design that quickly vaporizes the thickest and most purified oil.</p>
        <p>* To activate the battery press button 3 times and 5 times to deactivate.</p>
        <p><strong>Flavours Include</strong></p>
        <ul>
        <li><strong>Blue Dream</strong></li>
        <li><strong>Blueberry</strong></li>
        <li><strong>White Widow</strong></li>
        <li><strong>Clementine</strong></li>
        <li><strong>Gelato</strong></li>
        <li><strong>Pineapple Diesel</strong></li>
        <li><strong>Watermelon</strong></li>
        </ul>
                        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Grapefruit Live Resin",
        image:"./downloaded-images2/CONCENTRATES/grapefuit-live-resin.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="woocommerce-tabs container tabbed-content">
        <div class="tab-panels">
        <div id="tab-description" class="panel entry-content active">
        <p><strong>Grapefruit Live Resin</strong>&nbsp;is a potent&nbsp;sativa&nbsp;was developed by crossing&nbsp;Cinderella 99&nbsp;with a fast-flowering sativa selected for its rich&nbsp;grapefruit&nbsp;flavor. The&nbsp;tropical,&nbsp;citrus&nbsp;smell of Grapefruit mixes with&nbsp;energetic&nbsp;effects to give you a&nbsp;happy&nbsp;stress-reliever&nbsp;that also works well for battling&nbsp;migraine-headaches.</p>
        <p><strong>1 Gram of Live Resin</strong></p>
        </div>
        <div id="tab-reviews" class="panel entry-content ">
        <div id="reviews" class="row">
        <div id="comments" class="col large-12">
        <h3 class="normal"></h3>
        <p class="woocommerce-noreviews">
        </p></div>
        <div id="review_form_wrapper" class="large-12 col">
        <div id="review_form" class="col-inner">
        <div class="review-form-inner has-border">
        <p class="woocommerce-verification-required">
        </p></div>
        </div>
        </div>
        </div>
        </div>
        <div id="tab-refer_tab" class="panel entry-content ">
        <div class="gens-refer-a-friend">
        <div id="gens-raf-message"></div>
        </div>
        </div>
        </div>
        </div>
        <div class="related related-products-wrapper product-section"></div>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Distillate Disposable Vape Pen",
        image:"./downloaded-images2/CONCENTRATES/hoote_pen-e1530141561231-247x247-1.png",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts</strong>&nbsp;delivers another&nbsp;<em>high</em>&nbsp;quality&nbsp;product with their&nbsp;<strong>THC Distillate Disposable Vape Pen</strong>. Each vape pen is made from&nbsp;<em>THC Distillate</em>, an over 92% THC&nbsp;<strong><a href="https://buylowgreen.com/" target="_blank" rel="noopener">cannabis</a>&nbsp;extract</strong>. Processed in a state of the art facility through a short loop distillation, we are left with a<em>&nbsp;solvent free extract</em>.</p>
        <p>Every&nbsp;<strong>disposable vaporizer</strong>&nbsp;is specifically designed with ceramic coils for proper consumption of distillate. The sleek design allows patients&nbsp;to medicate with ease and discretely on the go. Each vape pen carries 500 mg of&nbsp;<em>THC Distillate.</em></p>
        <p>Non rechargeable and non refillable. Each battery is 320 mah and equals roughly 150 puffs.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Pen Refill Cartridge",
        image:"./downloaded-images2/CONCENTRATES/hooti-cart_green-crack-1-600x399-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts Vaporizer</strong>&nbsp;<strong>Pen Refill Cartridges!</strong>&nbsp;Each cartridge is universally designed with 510 threading which contains 1 gram of&nbsp;<strong>Hooti’s Premium THC Distillate</strong>.</p>
        <p><strong>Disclaimer: Only use the charger provided in the kit. Charging takes around 1 hour. Overcharging may cause battery failure.</strong></p>
        <p><strong>Strains:</strong></p>
        <ul>
        <li>Purple Kush</li>
        <li>Sour Tangie</li>
        <li>Death Bubba</li>
        <li>Wedding Cake</li>
        <li>God’s Green Crack</li>
        <li>King Kush</li>
        <li>Hawaiian Cookies</li>
        <li>Green Crack</li>
        <li>Afghan Kush</li>
        <li>Trainwreck</li>
        </ul>
        </div>`,
        price:45.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts CBD Isolate",
        image:"./downloaded-images2/CONCENTRATES/Hooti-CBD-Isolate-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts CBD Isolate&nbsp;</strong>is the purest form of Cannabidiol. CBD is the non-psychoactive part of the cannabis plant. So CBD will not get you “high”. It is seen as a fine white powder that packs a huge punch.</p>
        <p><strong>Each container comes with 1g of CBD Isolate</strong></p>
        </div>`,
        price:50.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts Death Star Shatter",
        image:"./downloaded-images2/CONCENTRATES/Hooti-Death-Star-Shatter-247x247-1.jpg",
        description:`Each order includes 1 gram of Hooti’s premium shatter`,
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Vaporizer  Pen Kit",
        image:"./downloaded-images2/CONCENTRATES/hooti-pen-600x399-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts THC Vaporizer Pen Kit&nbsp;</strong>consists of one battery, one charger and a cartridge of your choice.</p>
        <p>Each cartridge contains 1 gram of&nbsp;<strong>Hooti’s Premium THC Distillate</strong>.</p>
        <p><strong>Disclaimer: Only use the charger provided in the kit. Charging takes around 1 hour. Overcharging may cause battery failure.</strong></p>
        <p><strong>Strains:&nbsp;</strong></p>
        <ul>
        <li>Purple Kush</li>
        <li>Sour Tangie</li>
        <li>Death Bubba</li>
        <li>Wedding Cake</li>
        <li>God’s Green Crack</li>
        <li>King Kush</li>
        <li>Hawaiian Cookies</li>
        <li>Green Crack</li>
        <li>Afghan Kush</li>
        <li>Trainwreck</li>
        </ul>
        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts Grand Daddy Purple Shatter",
        image:"./downloaded-images2/CONCENTRATES/hooti-shatter-granddaddy-purp-ft-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Grand Daddy Purple</strong>&nbsp;Shatter by Hooti Extracts is a famous indica strain which comes from the cross of purple urkle and big bud. This strain came from California but has made a name for itself all over North America. The grape and berry aroma this shatter provides is delicious and it only makes you want to keep on smoking. Not to mention the great effects that hit both the mind and body, you will feel relieved from all symptoms of pain, stress, insomnia or muscle spasms. We suggest to smoke this shatter at night time for its couch lock effects, if you do smoke this strain during the day you may not be able to complete your daily tasks!</p>
        <p><strong>Each order includes 1 gram of Hooti’s premium shatter</strong></p>
                        </div>`,
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC-A",
        image:"./downloaded-images2/CONCENTRATES/Hooti-THC-Distillate1-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts THC-A&nbsp;</strong>is a cannabinoid found within the trichomes of cannabis plants that can be consumed by vaporizing or dabbing. Effects will take over your body immediately once you vaporize or dab this concentrate. The full word for THC-A is&nbsp;Tetrahydrocannabinolic acid and is the purest form of THC.&nbsp;Crystalline cannabinoids work well for&nbsp;oral ingestion&nbsp;as they can be prepared into foods and even portioned into pills or capsules.</p>
        <p><strong>Every package contains 1g of THC-A</strong></p>
        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Distillate Syringes",
        image:"./downloaded-images2/CONCENTRATES/Hooti-THCA-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Hooti Extracts THC Distillate Syringes</strong>&nbsp;are a pure distillate that can be used however you want! The distillates&nbsp;are made using a closed loop CO2 extractor, then distilled using a short path distillation three times making a pure THC distillate. Try using it for dabs, your vape or even eat it!</p>
        <p><strong>Every syringe contains 100mg of THC</strong></p>
        </div>`,
        price:50.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Firerock Extracts Jack Herer Shatter",
        image:"./downloaded-images2/CONCENTRATES/Jack-Herer-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Firerock Extracts Jack Herer</strong>&nbsp;Shatter is a&nbsp;sativa-dominant cannabis strain that has gained as much renown as its namesake, the marijuana activist and author of&nbsp;<em>The Emperor Wears No Clothes</em>. Combining a&nbsp;Haze&nbsp;hybrid with a&nbsp;Northern Lights #5&nbsp;and&nbsp;Shiva Skunk&nbsp;cross, Sensi Seeds created&nbsp;<strong>Jack Herer</strong>&nbsp;hoping to capture both the cerebral&nbsp;elevation&nbsp;associated with&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativas</a>&nbsp;and the heavy resin production of&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">indicas</a>. Its rich genetic background gives rise to several different variations of<strong>&nbsp;</strong>it,&nbsp;each&nbsp;phenotype&nbsp;bearing its own unique features and effects. However, consumers typically describe this 55% sativa hybrid as&nbsp;blissful, clear-headed, and&nbsp;creative.</p>
        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Firerock Extracts Jupiter OG Shatter",
        image:"./downloaded-images2/CONCENTRATES/Jupiter-OG-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Firerock Extracts Jupiter OG Shatter</strong>, named for the largest planet in our solar system,&nbsp;<strong>Jupiter OG</strong>&nbsp;has a big impact on its users. Not only does this&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">indica</a>&nbsp;boast one of the highest yields of the planetary strains, it’s also fast-acting and extremely potent. Known among the celestial for its particularly dense nugs with an abundance of reddish hairs,&nbsp;<strong>Jupiter Shatter</strong>&nbsp;leaves nothing to be desired. This strain features a pungent fuel smell and overpowering taste. It provides a very heavy and long-lasting body high, making it great for people looking for relief from insomnia or pain.</p>
                        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy Vape Pen Kit",
        image:"./downloaded-images2/CONCENTRATES/Keyy-Starter-Kit-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Bob/Keyy Pen Kit</strong>&nbsp;is a state of the art distillate vaporizer. The cartridge contains 0.8ml of Keyy oil.</p>
        <p><strong>This Bob/Keyy Vape Pen kit consists of 1 cartridge, 1 battery, and 1 charger.</strong></p>
        <p><strong>ATTENTION* Please prime cartridge before using to avoid a burnt or off flavour. Simply take 5 long, 5 second pulls without pressing the power button.&nbsp;</strong></p>
        <p>We have successfully developed a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a pen vaporizer design that quickly vaporizes the thickest and most purified oil. This is not a pen for puffing. It’s a pen for the long haul.</p>
                        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Moonrock Pre-Roll Joints",
        image:"./downloaded-images2/CONCENTRATES/moon-rock-prerolls-600x600-e1537556180300.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>The Moonrock Pre-Roll Joints are made using the original and flavoured moonrocks, consisting of an OG bud, rolled in honey oil and powdered with kief. It is said to be Moonrock Canada’s strongest Moonrock and is now conveniently available in a pre-rolled joint!</p>
        <p><strong>1 Moonrock Joint Per Order</strong></p>
                        </div>`,
        price:20.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Moon Rocks (Moonrock Canada)",
        image:"./downloaded-images2/CONCENTRATES/Moonrocks-e1537486280416-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Moon Rocks (Moonrock Canada)</strong></p>
        <p>It is recommended that you do not use your grinder when preparing your<strong>&nbsp;Moon Rocks</strong>&nbsp;as you may lose a lot of kief in the process.&nbsp;For the best smoke and taste,&nbsp;tear the&nbsp;<em>moonrock</em>&nbsp;into small pieces and smoke it in a pipe or bong.&nbsp;<strong>Moonrocks</strong>&nbsp;are made from&nbsp;<strong>OG Kush</strong>&nbsp;bud, dipped in&nbsp;<strong>hash&nbsp;oil</strong>&nbsp;and powdered in kief!</p>
        <p>However, it can be smoked any way you want – just don’t use your grinder, use scissors if you are rolling it yourself. It’s all <span style="font-size: 14.4px;"><b>Indica</b></span>&nbsp;and comes in many&nbsp;<span style="font-size: 14.4px;"><b>flavors</b></span><b> </b>. It also lasts a lot longer than a regular gram of&nbsp;<strong>flower</strong>.</p>
        <p>Although the product is listed for $30.00 per gram, the quality will speak for itself.</p>
        <p>Each order contains 1 gram of&nbsp;<strong>Moon Rocks</strong>.</p>
        <p>Available Flavors</p>
        <ul>
        <li>Peaches and Cream</li>
        <li>Vanilla Ice Cream</li>
        <li>Blueberry</li>
        <li>Strawberry</li>
        <li>Original</li>
        <li>Grapefruit</li>
        <li>Pina Colada</li>
        <li>Caramel</li>
        <li>Watermelon</li>
        </ul>
                        </div>`,
        price:30.00,
        category:"CONCENTRATES",
        countInStock: 30,
        options :[
            {
                name:"Peaches and Cream",
                price: 40,
            },
            {
                name:"Vanilla Ice Cream",
                price: 30,
            },
            {
                name: "Blueberry",
                price: 30,
            },
            {
                name: "Strawberry",
                price: 30,
            },
            {
                name: "Original",
                price: 30,
            },
            {
                name: "Grapefruit",
                price: 30,
            },
            {
                name: "Pina Colada",
                price: 30,
            },
            {
                name: "Caramel",
                price: 30,
            },
            {
                name: "Watermelon",
                price: 30,
            },
        ]
    },
    {
        name:"Mr. Dank Cookies Shatter",
        image:"./downloaded-images2/CONCENTRATES/Mr-Dank-Cookies-Shatter-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="description">
        <p><strong>Cookies Shatter&nbsp;</strong>by&nbsp;<strong>Mr. Dank&nbsp;</strong>is a&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">indica</a>&nbsp;strain with a high end THC percentage. The well balanced effects are perfect for all types of consumers. Great for combating symptoms of pain, aches, and anxiety.</p>
        <p>&nbsp;</p>
        </div>
        <p>Effects –&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/hungry/" target="_blank" rel="noopener">Hungry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></p>
        <p>Medical Benefits –&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a></p>
        <p>Flavours –&nbsp;<a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/skunk/" target="_blank" rel="noopener">Skunk</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Mr. Dank Critical Mass Shatter",
        image:"./downloaded-images2/CONCENTRATES/Mr-Dank-Death-Bubba-Shatter-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="description">
        <p><strong>Critical Mass Shatter&nbsp;</strong>by&nbsp;<strong>Mr. Dank</strong>&nbsp;indica strain which is most often reserved for evening or night-time use due to its sedating effect. For the same reason, it’s good for insomniacs seeking a full night’s rest. Critical Mass Indica body high may ease most chronic aches and pains as well as relieve stress and anxiety. Others choose this strain for migraines, nausea, and anorexia.</p>
        </div>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/woody/" target="_blank" rel="noopener">Woody</a></p>
        <p><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/hungry/" target="_blank" rel="noopener">Hungry</a></p>
        <p><strong>Medical Benefits:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/tress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Mr. Dank Death Bubba Shatter",
        image:"./downloaded-images2/CONCENTRATES/Mr-Dank-Rockstar-Shatter.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="description">
        <p><strong>Death Bubba Shatter&nbsp;</strong>by&nbsp;<strong>Mr. Dank</strong>&nbsp;is&nbsp;a beautiful, purple-hued strain with trichromes and terpenes abound.&nbsp;<em>Death Bubba</em>&nbsp;was created by crossing Death Star and Bubba Kush, this pungent pairing reeks of grass and skunk while the smoke is sweet, earthy, and clean on the palate. Its semi-sedative effects lock the consumer to the couch, unknotting tension and soothing minor physical discomfort with ease. This stinky BC native has been serving cannabis enthusiasts since 2012 and was most recently smelled off Fraser St. the Vancouver metro area</p>
        </div>
        <header></header>
        <header></header>
        <header></header>
        <header></header>
        <header></header>
        <header class="heading--article">
        <header class="heading--article"><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pungent/" target="_blank" rel="noopener">Pungent</a></header>
        <header class="heading--article"><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></header>
        <header class="heading--article"><strong>Medical:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a></header>
        </header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Mr. Dank G13 Shatter",
        image:"./downloaded-images2/CONCENTRATES/MrDank-Critical-Mass-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="description">
        <p><strong>G13 Shatter&nbsp;</strong>by&nbsp;<strong>Mr. Dank</strong>&nbsp;is a very strong strain of cannabis indica that is the subject of many urban legends. According to some accounts, the CIA, FBI, and other agencies gathered the best strains of marijuana from breeders all over the world.&nbsp;At a super-secret installation at the University of Mississippi, they bred many new super hybrids in the late 1960s.&nbsp;Allegedly, a single cutting of this plant was liberated by an unnamed technician and bred for the masses.</p>
        </div>
        <p>&nbsp;</p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p><strong>Medical Benefits –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></p>
        <p><strong>Flavours –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/diesel/" target="_blank" rel="noopener">Diesel</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Mr. Dank Rockstar Shatter",
        image:"./downloaded-images2/CONCENTRATES/MrDank-G13-Shatter-600x600-1-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <div class="description">
        <p><strong>Rockstar Shatter&nbsp;</strong>by&nbsp;<strong>Mr. Dank</strong>&nbsp;comes from the well known strain&nbsp;<em>rockstar kush</em>, also known as BC Rockstar, is a popular strain in British Columbia renowned for its excellent medical qualities.&nbsp;<strong>Rockstar Kush</strong>, a heavy&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">indica</a>, helps patients overcome aches,&nbsp;pains, and&nbsp;anxieties&nbsp;with its&nbsp;relaxing&nbsp;effects that also stimulate a&nbsp;reduced appetite.</p>
        </div>
        <p>&nbsp;</p>
        <p>Effects –&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/hungry/" target="_blank" rel="noopener">Hungry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></p>
        <p>Medical Benefits –&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a></p>
        <p>Flavours –&nbsp;<a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/skunk/" target="_blank" rel="noopener">Skunk</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/woody/" target="_blank" rel="noopener">Woody</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pennybags Extracts Park Place Pineapple Shatter",
        image:"./downloaded-images2/CONCENTRATES/Pennybags-Pineapple-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Park Place Pineapple Shatter</strong>&nbsp;by&nbsp;<em>Pennybags Extracts</em>&nbsp;is an extract from the<strong>&nbsp;<a href="https://buylowgreen.com/product/pineapple-express/" target="_blank" rel="noopener">Pineapple Express</a></strong><a href="https://buylowgreen.com/product/pineapple-express/" target="_blank" rel="noopener">&nbsp;</a><strong><a href="https://buylowgreen.com/product/pineapple-express/" target="_blank" rel="noopener">Strain</a>.&nbsp;</strong>It&nbsp;combines the potent and flavorful forces of parent strains<em>&nbsp;Trainwreck</em>&nbsp;and&nbsp;<em>Hawaiian</em>. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes.</p>
        <p><strong>The Pineapple Express</strong>&nbsp;<strong>Strain</strong>&nbsp;is a&nbsp;<strong>Sativa</strong>&nbsp;dominant strain with a 60:40&nbsp;<strong>sativa</strong>/<strong>indica</strong>&nbsp;ratio. The strain is quite popular and has achieved recognition thanks to the stoner film of the same name. However, you have to keep in mind that the strain is not as intense as the movie has made it out to be. But&nbsp;<strong>Pineapple Express</strong>&nbsp;still manages to offer a mild and nice body-numbing buzz, which is something to look forward to. The&nbsp;<strong>strain</strong>&nbsp;is offered in the form of well-weighed nuggets that look like Styrofoam popcorn. It does not taste sweet, but it does smell funky with its citrus overtones. The taste is quite extraordinary with a hint of pineapple while you inhale. Pineapple Express is chosen to treat a lot of medical problems including anxiety and stress. However, it is even more effective at curing the symptoms of chronic depression at the same time. If you are suffering from mild pains and aches, you should look no further. After a smoke, you will realize&nbsp;<strong>Pineapple Express</strong>&nbsp;is calming and stimulating at the same time. Not only will it heighten all your senses but you will feel energized all the while observing an increase in focus, awareness and creativity.</p>
        <p><strong>1 Gram of Shatter in Every Order</strong></p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p><strong>Medical Benefits –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></p>
        <p><strong>Flavours –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/pineapple/" target="_blank" rel="noopener">Pineapple</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/tropical/" target="_blank" rel="noopener">Tropical</a></p>
                        </div>`,
        price:35,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pennybags Extracts Railroad Romulan Shatter",
        image:"./downloaded-images2/CONCENTRATES/Pennybags-Romulan-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>If you are a fan of Star Trek then you’ve heard of&nbsp;<strong>Pennybags Extracts</strong>&nbsp;<strong>Railroad</strong>&nbsp;<strong>Romulan Shatter</strong>. That’s exactly where this potent strain got its name from. Jokingly people said this bud would dent your head, and to this day the legend lives on.</p>
        <p>For those who look to credentials to verify a strains status and worth, look no further. Known for its pine scented buds that are packed with frosty goodness. A perennial High Times Magazine and Cannabis Culture staple, the&nbsp;<em>Romulan strain</em>&nbsp;has garnered the respect of peers from all corners of the planet.</p>
        <p>Romulan’s exact roots are somewhat of a mystery. Federation Seeds purchased the strain in 96′ and attempted to keep the strain alive by cloning it with White Rhino and back crossed it until only 3% White Rhino was remaining.</p>
        <p>A very heavy Indica that doesn’t mess around,&nbsp;<strong>Romulan weed</strong>&nbsp;isn’t for the faint of heart. Its extremely heavy stone leaves patients with the “couch lock” feeling whether they desire it or not. This is a strain most definitely not recommended for day time consumption. Unless you’re looking for a solid day time nap of course, then be our guest. Starting off with a very euphoric and uplifting high, you will soon realize that your hunger is unbearable and eating the entire fridge is a must, pronto.</p>
        <p>Due to its powerful numbing effects,&nbsp;<a href="https://buylowgreen.com/product/romulan/" target="_blank" rel="noopener"><em>Romulan</em>&nbsp;</a>is also exceptionally good at ridding your body of pains and aches. For those dealing with muscle and nerve damage that leads to spastic movements are also directed to this flower. Start slow as this is a potent strain that packs a powerful punch. We recommend starting with only a couple puffs and working your way up slowly.</p>
        <p><strong>1 Gram of Shatter in Every Order</strong></p>
        <p><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></p>
        <p><strong>Medical</strong>&nbsp;<strong>Uses:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></p>
        <p><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pungent/" target="_blank" rel="noopener">Pungent</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pennybags Extracts Short Line Shatter",
        image:"./downloaded-images2/CONCENTRATES/Pennybags-Short-Line-Skunk-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Pennybags Extracts Short Line Shatter</strong>&nbsp;comes from the popular known&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa</a>&nbsp;strain, Island Sweet Skunk. This shatter is great for daytime use because of its energetic characteristics. The fruity sweet taste of this shatter makes gives it a nice tropical flavour, while the aroma is best described as skunky and fruity.</p>
        <p><strong>1 Gram of Shatter in Every Order</strong></p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p><strong>Medical Benefits –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a></p>
        <p><strong>Flavours –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/skunk/" target="_blank" rel="noopener">Skunk</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/tropical/" target="_blank" rel="noopener">Tropical</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"jacketnnnn",
        image:"./downloaded-images2/CONCENTRATES/Pennybags-White-Castle-Water-Works-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Pennybags Extracts White Castle Water Works Shatter</strong>&nbsp;is an indica dominant hybrid strain which comes from the cross of&nbsp;<a href="https://buylowgreen.com/product/white-widow/" target="_blank" rel="noopener">white widow</a>&nbsp;and ice. The high is very euphoric with indica effects which can cause you to get sleepy. With THC levels reaching between 15-20%, this strain is great for anyone combating symptoms of nausea, inflammation, depression or stress.</p>
        <p><strong>1 Gram of Shatter in Every Order</strong></p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/creative/" target="_blank" rel="noopener">Creative</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p><strong>Medical Benefits –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></p>
        <p><strong>Flavours –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/berry/" target="_blank" rel="noopener">Berry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fruity/" target="_blank" rel="noopener">Fruity</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Death Bubba Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Death-Bubba-Shatter.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Death Bubba Shatter&nbsp;</strong>by<strong>&nbsp;Phyto Extractions</strong>&nbsp;is an<strong>&nbsp;Indica dominant</strong>&nbsp;is a beautiful, purple-hued strain with trichromes and terpenes abound. Created by crossing Death Star and Bubba Kush, this pungent pairing reeks of grass and skunk while the smoke is sweet, earthy, and clean on the palate.</p>
        <p>&nbsp;</p>
        <header class="heading--article"><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pungent/" target="_blank" rel="noopener">Pungent</a>&nbsp;</header>
        <header></header>
        <header class="heading--article"><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>&nbsp;</header>
        <header></header>
        <header class="heading--article"><strong>Medical:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a></header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Jack Frost Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Jack-Frost-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Bred by Goldenseed,&nbsp;<strong>Jack Frost Shatter&nbsp;</strong>by&nbsp;<strong>Phyto Extractions</strong>&nbsp;was developed over 5 years of persistence in order to improve on the potency and aroma of this&nbsp;strain. Initially with a lineage of&nbsp;<strong>Jack Herer</strong>, White Widow, and Northern Lights #5, these&nbsp;strains were bred before then introducing Rainbow Kashmiri (now it its third year of exclusive inbreeding). THC content in this&nbsp;strain has been measured up to 22.6%, making it an above average strain for its content.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours –&nbsp;&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p><strong>Medical Uses –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Lemon Haze Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Lemon-Haze-Shatter-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Lemon Haze Shatter&nbsp;</strong>by<strong>&nbsp;Phyto Extractions</strong>&nbsp;is known for it’s fruity taste but there’s more then meets the nose.&nbsp;A very light and uplifting strain, patients are often recommended&nbsp;when looking to treat depression and anxiety.</p>
        <p>&nbsp;</p>
        <header class="heading--article"><strong>Flavours: &nbsp;</strong><a href="https://buylowgreen.com/product-tag/lemon/" target="_blank" rel="noopener">Lemon</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></header>
        <header class="heading--article"><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a></header>
        <header class="heading--article"><strong>Medical Uses:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Platinum Kush Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Platinum-Kush-Shatter.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Platinum Kush Shatter&nbsp;</strong>by<strong>&nbsp;Phyto Extractions</strong>&nbsp;is a favorite among the patients for its sweetness, the strain can cure anxiety, insomnia, pain, stress and a lack of appetite. A few tokes of this pungent strain can improve focus and revive your energy, pulling you out of depression.</p>
        <p>&nbsp;</p>
        <header class="heading--article"><strong>Flavours: &nbsp;</strong><a href="https://buylowgreen.com/product-tag/lemon/" target="_blank" rel="noopener">Lemon</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a></header>
        <header class="heading--article"><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a></header>
        <header class="heading--article"><strong>Medical Uses:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Romulan Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Romulan-Shatter.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Romulan Shatter&nbsp;</strong>by<strong>&nbsp;Phyto Extractions&nbsp;</strong>provides a&nbsp;sedating relaxation which is what makes this a favorite strain for patients treating muscle spasms and nerve damage. Many hybridized variations of exist, but nearly all can promise a full body calm with heavily intoxicating properties.</p>
        <p>&nbsp;</p>
        <header class="heading--article"><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></header>
        <header class="heading--article"><strong>Medical</strong>&nbsp;<strong>Uses:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></header>
        <header class="heading--article"><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pungent/" target="_blank" rel="noopener">Pungent</a></header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Blueberry Shatter",
        image:"./downloaded-images2/CONCENTRATES/Phyto-Sour-Diesel-Shatter.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Blueberry Shatter&nbsp;</strong>by<strong>&nbsp;Phyto Extractions</strong>&nbsp;is a strain which produces mostly mental effects that are calming but euphoric, happy and creative. Its best medical uses include treatment of low mood, lack of appetite, chronic pain, insomnia, and ordinary stress.</p>
        <p>&nbsp;</p>
        <header><strong>Flavours –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/blueberry/" target="_blank" rel="noopener">Blueberry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/diesel/" target="_blank" rel="noopener">Diesel</a></header>
        <header class="heading--article"><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/creative/" target="_blank" rel="noopener">Creative</a></header>
        <header class="heading--article"><strong>Medical Benefits –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a></header>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Phyto Extractions Blue Haze Shatter",
        image:"./downloaded-images2/CONCENTRATES/PhytoExtracts-BlueHaze-04-19.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Blue Haze Shatter</strong>&nbsp;is the daughter of a&nbsp;<span class="s1">Blueberry</span>&nbsp;indica and the original&nbsp;Haze, making this slightly&nbsp;sativa-dominant hybrid is a versatile strain. It has a great taste and scent, and produces a full-bodied effect.&nbsp;<strong>Blue Haze Shatter</strong>&nbsp;is a great candidate for the regular consumer’s arsenal as it is appropriate for a broad spectrum of activities and provides the optimal balance between cerebral and physical effects.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours –</strong>&nbsp;<a href="https://buylowgreen.com/product-tag/blueberry/" target="_blank" rel="noopener">Blueberry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/berry/" target="_blank" rel="noopener">Berry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pine/" target="_blank" rel="noopener">Pine</a></p>
        <p><strong>Effects –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a></p>
        <p><strong>Medical Uses –&nbsp;</strong><a href="https://buylowgreen.com/product-tag/muscle-spasms/" target="_blank" rel="noopener">Muscle Spasms</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/headaches/" target="_blank" rel="noopener">Headaches</a></p>
                        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
     
        name:"Firerock Extracts Purple Afghani Shatter",
        image:"./downloaded-images2/CONCENTRATES/Purple-Afghani.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p><strong>Firerock Extracts Purple Afghani Shatter</strong>&nbsp;has&nbsp;roots that trace back to the&nbsp;<strong>Hindu Kush</strong>&nbsp;mountain range near the Afghanistan-Pakistan border. There&nbsp;its genotype has been perfected over centuries,&nbsp;making&nbsp;it the ultimate source for&nbsp;<strong>hash</strong>&nbsp;such as charas and the sticky&nbsp;<strong>black&nbsp;<a href="https://buylowgreen.com/product/afghan-kush/" target="_blank" rel="noopener">Afghani hash</a></strong>. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this&nbsp;<strong>strain</strong>&nbsp;available for everyone to grow.&nbsp;The buds of&nbsp;<strong>Afghani Kush</strong>&nbsp;develop into massive, blunt-topped nuggets full of resin; pure&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener"><strong>indica&nbsp;</strong></a>goodness with a heavy yield.</p>
        <p>Each package comes with 1 Gram of&nbsp;<strong>Purple Afghani Shatter&nbsp;</strong>from&nbsp;<strong>Firerock Extracts.&nbsp;</strong>Made in B.C.</p>
                        </div>`,
        price:45,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Green Apple THC Distillate Ceramic Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Pyro-Ceramic-Cartridge-Green-Apple-2.jpg",
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Mango THC Distillate Ceramic Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Pyro-Ceramic-Cartridge-Mango-2-1.jpg",
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Peppermint THC Distillate Ceramic Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Pyro-Ceramic-Cartridge-Peppermint-2.jpg",
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Super Lemon Haze THC Distillate Ceramic Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Pyro-Ceramic-Cartridge-Super-Lemon-Haze-2-1.jpg",
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Watermelon THC Distillate Ceramic Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Pyro-Ceramic-Cartridge-Watermelon-2-247x247-1.jpg",
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Quadz Quadzilla Shatter",
        image:"./downloaded-images2/CONCENTRATES/quadzilla-300x300-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>Crafted from the genetics of&nbsp;God Bud,&nbsp;<strong>Quadzilla Shatter</strong>&nbsp;is a mostly&nbsp;indica&nbsp;strain bred by Caña de España specifically for hot climates. Crushing&nbsp;euphoria and&nbsp;sedation&nbsp;are delivered alongside a sour&nbsp;berry&nbsp;flavor accented with subtle notes of&nbsp;vanilla. Thoughts wander away, taking with them&nbsp;stress,&nbsp;anxiety, and&nbsp;depression. After some time, Godzilla’s effects subside to clear headed, functional&nbsp;bliss. Patients treating&nbsp;pain&nbsp;and&nbsp;muscle spasms&nbsp;may find relief in Godzilla’s potent and tranquilizing onset. Following a 55 day flowering cycle indoors or at the end of September outdoors, this indica produces colorfully vibrant buds of green and purple hues.</p>
        <p><strong>1 Gram of Shatter in Each Order</strong></p>
        <p><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/berry/" target="_blank" rel="noopener">Berry</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/flowery/" target="_blank" rel="noopener">Flowery</a></p>
        <p><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/sleepy/" target="_blank" rel="noopener">Sleepy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a></p>
        <p><strong>Medical Benefits:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>quadz</p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Rocky Mountain Rosin –  Rosin Vape Pen Kit",
        image:"./downloaded-images2/CONCENTRATES/Rocky-Mount-Rosin-600x600-600x600-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the finest Rosin pens around,&nbsp;<strong>Rocky Mountain Rosin Vape Pen</strong>&nbsp;keep all their natural terpenes and packs a serious punch!</p>
        <p>Kits include a 0.5 ml filled cartridge, 300 mg of distillate, 125 mg of dry sift citrus skunk rosin, and 75 mg of organic terpenes with essential oils.</p>
        <p>Also includes USB Charger, and non-disposable rechargeable battery inside a sleek case.</p>
        <p>Featuring a glass tank and ceramic heating element, this pen comes with everything you need to get smoking some of the finest Rosin extracted pens around.</p>
        <p><strong>Comes in 8 Flavours:</strong></p>
        <ul>
        <li>Citrus Skunk</li>
        <li>Pineapple Punch</li>
        <li>Cherry OG</li>
        <li>Trainwreck</li>
        <li>Watermelon</li>
        <li>Mango Haze</li>
        <li>Trainwreck</li>
        <li>BC Rockstar</li>
        </ul>
        <p><strong>Rocky Mountain</strong>&nbsp;is combining high quality extracts and a dedication to top shelf&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis</a>&nbsp;products. Made in B.C.</p>
                        </div>`,
        price:70.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Rocky Mountain Rosin – Rosin Vape  Pen Cartridge",
        image:"./downloaded-images2/CONCENTRATES/Rocky-mountain-rosin-cart-3-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>One of the finest Rosin pens around,&nbsp;<strong>Rocky Mountain Rosin Vape Pen</strong>&nbsp;keep all their natural terpenes and packs a serious punch!</p>
        <p>Includes a 0.5 ml filled cartridge, 300 mg of distillate, 125 mg of dry sift citrus skunk rosin, and 75 mg of organic terpenes with essential oils.</p>
        <p>Featuring a glass tank and ceramic heating element, this pen comes with everything you need to get smoking some of the finest Rosin extracted pens around.</p>
        <p><strong>Comes in 7 Different Flavours:</strong></p>
        <ul>
        <li><strong>Citrus Skunk</strong></li>
        <li><strong>Red Congolese</strong></li>
        <li><strong>Trainwreck</strong></li>
        <li><strong>Cherry OG</strong></li>
        <li><strong>Pineapple Punch&nbsp;</strong></li>
        <li><strong>Mango Haze</strong></li>
        <li><strong>Watermelon Kush</strong></li>
        </ul>
        <p><strong>Rocky Mountain</strong>&nbsp;is combining high quality extracts and a dedication to top shelf&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis</a>&nbsp;products. Made in B.C.</p>
                        </div>`,
        price:40.00,
        category:"CONCENTRATES",
        countInStock: 30,
        options:[
            {
                name: "Watermelon Kush",
                price: 40,
            },
            {
                name: "Mango Haze",
                price: 40,
            },
            {
                name: "Pineapple Punch ",
                price: 40,
            },
            {
                name: "Cherry OG",
                price: 40,
            },
            {
                name: "Trainwreck",
                price: 40,
            },
            {
                name: "Red Congolese",
                price: 40,
            },
            {
                name: "Citrus Skunk",
                price: 40,
            }
        ],
    },
    {
        name:"Squish Citrus Haze Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-Citrus-Haze-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Citrus Haze Rosin</strong>&nbsp;is a sativa dominant hybrid strain from<strong>&nbsp;Squish Extracts</strong>. You’ll feel a happy sense of relaxation with a laser-sharp focus that lends itself well to mental tasks at hand or simply stimulating conversation.&nbsp;It has fast-acting energizing effects, providing a happy feeling and a heightened focus. It is used effectively for chronic fatigue, depression, and stress.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/lemon/" target="_blank" rel="noopener">Lemon</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/citrus/" target="_blank" rel="noopener">Citrus</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/orange/" target="_blank" rel="noopener">Orange</a></p>
        <p><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/creative/" target="_blank" rel="noopener">Creative</a></p>
        <p><strong>Medicinal Benefits:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/muscle-spasms/" target="_blank" rel="noopener">Muscle Spasms</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a></p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish Columbian Gold Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-Columbian-Gold-600x600-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Squish Columbian Gold Rosin</strong>&nbsp;is a classic&nbsp;landrace&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa&nbsp;</a>that originated in the Santa Marta mountains of Colombia. Its buds are fluffy and crystal-covered, radiating&nbsp;skunky,&nbsp;sweet&nbsp;notes of&nbsp;lemon&nbsp;and&nbsp;lime. This indigenous sativa parented the famous&nbsp;Skunk #1, a&nbsp;hybrid that has become a staple of cannabis breeding. The active,&nbsp;uplifting, and&nbsp;focused effects of Colombian Gold come without paranoia and anxiety, making this strain a great choice for novice consumers or those needing to stay productive while medicating. Colombian Gold may help patients ease muscle tension,&nbsp;pain, and other physical symptoms, but its&nbsp;stimulating&nbsp;and&nbsp;happy&nbsp;qualities could also be used for&nbsp;depression&nbsp;and&nbsp;ADD/ADHD.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish Lamb’s Bread Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-lambs-bread-600x600-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Also called “Lamb’s Breath,”&nbsp;<strong>Squish</strong>&nbsp;<strong>Lamb’s Bread Rosin</strong>&nbsp;is&nbsp;a bright green and sticky&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa&nbsp;strain</a>. The effects have been known to give mass amounts of energy and positive introspection. Stress subsides quickly from the Lamb’s Bread buzz, which&nbsp;can help&nbsp;ease depression. The origins of this plant comes from Jamaica and it has been reported that even Bob Marley himself has encountered this wonderful slice of cannabis genealogy.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish Pink Kush Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-Pink-Kush-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Pink Kush Rosin</strong>, as coveted as its&nbsp;<strong>OG Kush</strong>&nbsp;relative, is an&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener"><strong>indica</strong></a>-dominant&nbsp;<strong>hybrid&nbsp;</strong>with powerful body-focused effects. In its exceptional variations, pink hairs burst from bright green buds barely visible under a blanket of sugar-like trichomes, with traces of a sweet vanilla and candy perfume. The potency&nbsp;of this&nbsp;<strong>strain</strong>&nbsp;could be considered overpowering, and even small doses are known to&nbsp;eliminate pain, insomnia, and appetite loss.&nbsp;Growers have to wait 10 to 11 weeks for&nbsp;<strong>Pink Kush</strong>&nbsp;flowering, but high&nbsp;yields of top-shelf buds&nbsp;are worth the wait.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish UK Cheese Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-UK-Cheese-600x600-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Squish UK Cheese Rosin,&nbsp;</strong>also known as&nbsp;<strong>Cheese weed</strong>&nbsp;is by far the biggest strain to come from the United Kingdom. The Second you get a whiff of it you’ll know why. The pungent cheesy smell will fill up the room in an instant and have you smiling. Originally bred by the Exodus Collective in the early 90’s, UK is an&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">Indica&nbsp;</a>dominant hybrid that actually accents plenty of sativa. As a result of inbreeding Skunk #1 we get a pungent, cheesy strain that keeps its lovers coming back for more and more.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Squish Violator Kush Rosin",
        image:"./downloaded-images2/CONCENTRATES/Squish-Violator-Kush-600x600-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Squish Violator Kush Rosin&nbsp;</strong>is an&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indicas/" target="_blank" rel="noopener">Indica</a>&nbsp;dominant hybrid known for having a&nbsp;THC&nbsp;count as high as 22 percent and a CBD count of up to one and a half percent. The tastes of spice, Kush and pepper deliver a potent Indica high that often leads to true couch-lock. Users report feeling a lazy body buzz coming on as early as the first hit that is accompanied by euphoria.</p>
        </div>`,
        price:60.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Super Nova Gorilla Cookies Shatter",
        image:"./downloaded-images2/CONCENTRATES/Supernova-Gorilla-Cookies.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Super Nova Gorilla Cookies Shatter</strong>&nbsp;by Elev8 Seeds is the powerful union of&nbsp;Gorilla Glue #4&nbsp;and&nbsp;Thin Mint Girl Scout Cookies. The pungent&nbsp;<strong>Gorilla Glue</strong>&nbsp;aroma is loud, but Thin Mint’s exotic&nbsp;terpene profile adds nuance to the bouquet. Both parents were bred for potency and that shows in the resin-coated buds that harden like stones after curing. Enjoy this one-hitter quitter with care, as the effects will alter the trajectory of your entire day.&nbsp;<strong>Gorilla Cookies</strong>&nbsp;is a quality strain for managing physical pain, nausea, and stress.</p>
        <p><strong>1 Gram of Shatter</strong></p>
        </div>`,
        price:33.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Super Nova Grape Ape Shatter",
        image:"./downloaded-images2/CONCENTRATES/Supernova-Grape-Ape.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Grape Ape Shatter&nbsp;</strong>by&nbsp;<b>Super Nova&nbsp;Extractions</b>&nbsp;is a tasty, memorable strain with strong indica roots. Its distinctive look and complex fruity flavor makes it an easy favorite — to say nothing of its incredibly potent body high.&nbsp;<strong>Grape Ape Shatter</strong>&nbsp;is the product of strains as different as Mendocino Purps, an award-winning Northern California crossbreed, the influential staple strain Skunk, and a legendary Afghani landrace. The combination of these nuances has yielded a bold and visually striking variety.</p>
        <p><strong>1 Gram of Shatter</strong></p>
        </div>`,
        price:33.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Quadz The Wizard Shatter",
        image:"./downloaded-images2/CONCENTRATES/the-wizard-300x300-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">										
        <p>Blissful Wizard by The Captain’s Connection is the strain that&nbsp;<strong>The Wizard Shatter</strong>&nbsp;by&nbsp;<em>Quadz</em>&nbsp;has been extracted from. It is a potent&nbsp;hybrid&nbsp;strain that crosses Captain’s Cookies and&nbsp;Girl Scout Cookies&nbsp;in a decadent fusion of&nbsp;lemon,&nbsp;lime, and cream flavors. With a soaring THC content that won this strain 1st place in the&nbsp;2015 SoCal Cannabis Cup&nbsp;as a&nbsp;non-solvent hash, Blissful Wizard is the only healing potion you’ll need to eliminate stubborn aches,&nbsp;pains,&nbsp;nausea, and&nbsp;appetite loss. This flavorful hybrid helps conjure a&nbsp;happy&nbsp;headspace in which life’s stressors are obliterated by a blast of otherworldly euphoria.</p>
        <p><strong>1 Gram of Shatter in Each Order</strong></p>
        <p><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/skunk/" target="_blank" rel="noopener">Skunk</a></p>
        <p><strong>Effects:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/happy/" target="_blank" rel="noopener">Happy</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a></p>
        <p><strong>Medical Benefits:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/pine/" target="_blank" rel="noopener">Pain</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></p>
        </div>`,
        price:35.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"Wonka Chocolate Fondue Shatter",
        image:"./downloaded-images2/CONCENTRATES/wonka-extracts-chocolate-fondue-300x300-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p dir="ltr">THC levels of&nbsp;<strong>Chocolate Fondue</strong>&nbsp;rarely vary, ranging from 15% to 17%, so users can bank on a solid head high with every session. Nugs are small and deep green with brown and orange hairs that give off an earthy aroma. The sticky resin brings in the chocolate and coffee flavors of its namesake. Enjoy the cheese and nutty flavors as you inhale, and revel in the floral notes as the smoke fades. Those with discriminating palates will find something to love about&nbsp;<strong>Chocolate Fondue,</strong>&nbsp;whether it’s the aroma or one of its many smells.</p>
        <p dir="ltr">For users who fancy themselves as the outgoing type, a bong of&nbsp;<em>Chocolate Fondue Shatter</em>&nbsp;is the perfect conversation starter. After the first hit, users can expect a sudden rush of bliss and creative energy, encouraging their more social side, while the deeply satisfying body high makes its way to the party. This bud is perfect for any time of day as it is both relaxing for your muscles and joints as well as uplifting and engaging for those that need to be productive throughout the day. If you prefer to smoke at night,&nbsp;<strong>Chocolate Fondue</strong>&nbsp;makes a perfect after dinner treat.</p>
        <p dir="ltr"><strong>1 Gram of Shatter in Each Order</strong></p>
        <p dir="ltr"><strong>Flavours:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/sweet/" target="_blank" rel="noopener">Sweet</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/cheese/" target="_blank" rel="noopener">Cheese</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/earthy/" target="_blank" rel="noopener">Earthy</a></p>
        <p dir="ltr"><strong>Effects:&nbsp;</strong><strong>&nbsp;</strong><a href="https://buylowgreen.com/product-tag/uplifted/" target="_blank" rel="noopener">Uplifted</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/relaxed/" target="_blank" rel="noopener">Relaxed</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/focused/" target="_blank" rel="noopener">Focused</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/creative/" target="_blank" rel="noopener">Creative</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/energetic/" target="_blank" rel="noopener">Energetic</a></p>
        <p dir="ltr"><strong>Medical Benefits:&nbsp;</strong><a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/fatigue/" target="_blank" rel="noopener">Fatigue</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>,&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></p>
        </div>`,
        price:30.00,
        category:"CONCENTRATES",
        countInStock: 30,
    },
    {
        name:"SeC BC Pineapples 100 mg THC",
        image:"./downloaded-images2/EDIBLES/111917_pineapple.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>If you’ve been around the edibles block before, then you should hop aboard&nbsp;<strong>SeC BC Pineapples</strong>&nbsp;Express! These gummies offer a moderately high dosage in the form of easy eating pineapples that are sure to satisfy… With a moderately high dosage at 100mg THC, these&nbsp;pineapple&nbsp;gummies&nbsp;are the perfect treat that’s sure to satisfy anyone with a&nbsp;sweet tooth.</p>
        <p>&nbsp;</p>
        <h3>Ingredients:</h3>
        <p>Organic Raw Cane Sugar, Glucose Syrup, Water, Gelatin, Citric Acid, Organic Virgin Coconut Oil, Natural Flavour, Colouring</p>
        <p>&nbsp;</p>
        <p><strong>SeC</strong>&nbsp;is a new boutique edibles wholesaler based out of&nbsp;<a href="http://vancouver.ca/" target="_blank" rel="noopener">Vancouver BC</a>, distinguishing ourselves by offering great tasting goodies, with guilt-free ingredients. It is important to us that our clients ingest their edibles in the cleanest and safest way possible, which is why our products contain lab tested solvent-free&nbsp;THC extract&nbsp;made from locally sourced flower.</p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"SeC Butterfly High 400 mg THC",
        image:"./downloaded-images2/EDIBLES/111918_butterfly.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>SeC&nbsp;Butterfly High</strong>&nbsp;is SeC’s highest dosage gummy, at 400mg of THC extract, this is a treat that is meant for users to experience the butterfly effect. Users should be fully comfortable and confident in their edibles tolerance level.&nbsp;Strap in and prepare yourself for what may end up to be an evening of chaos theory.</p>
        <p>&nbsp;</p>
        <h3>Ingredients:</h3>
        <p>Organic Raw Cane Sugar, Glucose Syrup, Water, Gelatin, Citric Acid, Organic Virgin Coconut Oil, Natural Flavour, Colouring</p>
        <p>&nbsp;</p>
        <p><strong>SeC</strong>&nbsp;is a new boutique edibles wholesaler based out of&nbsp;<a href="http://vancouver.ca/" target="_blank" rel="noopener">Vancouver BC</a>, distinguishing ourselves by offering great tasting goodies, with guilt-free ingredients. It is important to us that our clients ingest their edibles in the cleanest and safest way possible, which is why our products contain lab tested solvent-free&nbsp;THC extract&nbsp;made from locally sourced flower.</p>
        </div>`,
        price:28.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Baked Edibles Mile High Mint 210mg THC Cannabar",
        image:"./downloaded-images2/EDIBLES/15b846b0259e6f3cf44530284e4fa850.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>A blend of milk and dark&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">chocolate</a>&nbsp;with the energizing effects of added fresh peppermint. A refreshing and energizing blast with this, our most potent&nbsp;<strong>Mile High Mint</strong>&nbsp;<strong>Cannabar</strong>!</p>
        <p><strong>210mg THC per Bar</strong>&nbsp;(15 portions of 14mg).&nbsp;Cannabis&nbsp;flavour strength – 5/10</p>
        <p><strong>Shelf Life:</strong>&nbsp;150&nbsp;Days before freezing.</p>
        <p>&nbsp;</p>
        <h3>Ingredients:</h3>
        <p>Milk Chocolate (sugar, Cocoa Butter, Whole Milk Powder, Unsweetened Chocolate, Soy Lecithin), Dark Choclate (sugar. Cocoa Butter, Natural Vanilla Flavour, Salt), Cannabis Thc Extract, Peppermint Essential Oil</p>
        <p>Produced in a facility that uses nuts.</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Baked Edibles Chocolate Fudge Brownie 200mg THC",
        image:"./downloaded-images2/EDIBLES/Baked-Edibles-Chocolate-Fudge-Brownie-200MG-510x394-1.png",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <h3>2017 Canadian Cannabis Awards 3rd Place Winner for Best Edibles Canada West</h3>
        <p>Baked Edibles Chocolate Fudge Brownie is blended with love into these classic favourites. These high-strength brownies are chewy, moist and are a huge favourite among consumers. Made with THC extract combined with MCT oil and soy lecithin for maximum bio-absorption. These THC Extract products produce an uplifting and highly stable&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativas/" target="_blank" rel="noopener">sativa</a>-like effect.</p>
        <p><strong>Ingredients:</strong>&nbsp;Brown sugar, dark chocolate (unsweetened chocolate, sugar, cocoa butter, soy lecithin, natural vanilla flavour), eggs, citric acid, unsalted butter, semisweet chocolate (unsweetened chocolate, sugar, cocoa butter, soy lecithin, natural vanilla extract), flour, cocoa powder, cannabis THC extract, vanilla extract, black cocoa powder, liquid soy lecithin, salt.</p>
        <p>Processing Details: Single bud strain fully extracted into MCT oil (found in coconut oil).</p>
        <p>Good to Know: MCT Oils are extracted from Coconut Oil and are extremely easy for your body to digest and immediately make use of. Combined with lecithin, they are simply the most bio-available binding agent for cannabis, maximizing the amount cannabis that ultimately gets absorbed into the bloodstream per capsule.</p>
        <p>MAY CONTAIN MINOR TRACES OF NUTS.</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Canna Co. Medibles Bee’s Knees Crunch Bar 300mg THC",
        image:"./downloaded-images2/EDIBLES/BEES-NEEES.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>What’s better than a chocolaty dessert? How about one that’s medicated with&nbsp;<strong>300mg of THC</strong>. That is exactly what we get with&nbsp;<em><strong>Canna Co. Medibles&nbsp;</strong>Bee’s Knees Crunch Bar</em>. Perfect for the cannabis connoisseur that happens to also have a sweet tooth! These&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">edibles</a>&nbsp;are very potent so be careful when ingesting.</p>
        <p><strong>300mg THC</strong></p>
        <p><strong>Each pack includes 1 bar.</strong></p>
        <p><b>Ingredients: Sea Foam Candy and Chocolate Bar, Dark Chocolate, Milk, Chocolate, Sugar, Baking Soda, Corn Syrup, Vinegar, Olive Oil,&nbsp;cannabis</b></p>
        <p>&nbsp;</p>
        <p><a href="https://buylowgreen.com/product-category/vendors/canna-co-medibles/" target="_blank" rel="noopener"><strong>Canna Co. Medibles</strong></a>&nbsp;is a Canadian company proud to bring you the finest cannabis infused sweets. Every tasty treat is hand made with love.</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 150mg Sour Green Apple Belts",
        image:"./downloaded-images2/EDIBLES/blastin-blue-raspberry-sour-belts-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Mota 150mg Sour Green Apple Belts</strong>&nbsp;are one of the latest additions to the family of Mota candies. Made with&nbsp;<a href="https://buylowgreen.com/product-category/concentrates/" target="_blank" rel="noopener">THC distillate</a>. Truly mouth watering goodness that will make you feel like a kid again! Proudly made and lab tested in Canada.</p>
        <p>&nbsp;</p>
        <p><em><strong>Insomnia&nbsp;|&nbsp;Pain&nbsp;|&nbsp;Stress&nbsp;|&nbsp;Anxiety&nbsp;|&nbsp;Lack of Appetite&nbsp;|&nbsp;Inflammation&nbsp;|&nbsp;Nausea</strong></em></p>
        <p>&nbsp;</p>
        <table class="shop_attributes">
        <tbody>
        <tr>
        <th>INGREDIENTS</th>
        <td>Corn syrup, sugar, THC distillate, gelatin, citric acid, natural and artificial flavours, pectin, artificial colours, coconut oil, carnauba wax</td>
        </tr>
        <tr>
        <th>STRENGTH</th>
        <td>150mg THC</td>
        </tr>
        <tr>
        <th>FLAVOUR</th>
        <td>Sour Green Apple</td>
        </tr>
        </tbody>
        </table>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota White Chocolate Cube 180mg CBD",
        image:"./downloaded-images2/EDIBLES/cbd-cube-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Our&nbsp;<em>Mota</em>&nbsp;<strong>White Cube</strong>&nbsp;is a tasty way to take your daily dose of CBD.</p>
        <p>Each of the nine pieces contain 20mg of CBD isolate, which is an excellent starting dose for treating the symptoms listed below.</p>
        <p><strong>180mg CBD</strong></p>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Canna Co Medibles Chocolate Covered Pretzel Bunnies 150mg THC",
        image:"./downloaded-images2/EDIBLES/Choco-cov-prez-bunnies.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Who doesn’t like the awesome combo of chocolate and a salty pretzels? Let’s take it up a notch and serve them medicated! Why not medicate with this lovely&nbsp;<b>THC&nbsp;</b>infused&nbsp;<b>Chocolate Covered Pretzel Bunnies</b>. Loaded with&nbsp;<strong>150</strong><strong>mg of THC</strong>&nbsp;per Pretzel.&nbsp;These&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">edibles</a>&nbsp;are very potent so be careful when ingesting.</p>
        <p><strong>Each Pack Includes 1 Chocolate Covered Pretzel / 150mg THC&nbsp;</strong></p>
        <p><b>Ingredients: Flour, Butter, Soybean Oil, Cocoa, Powder, baking Soda, Baking Powder, Eggs, Salt, Vegetable Lard, Sugar, Corn Syrup, Condensed Milk, Vanilla, Chocolate,&nbsp;</b>Cannabis.</p>
        <p><strong>150mg THC</strong></p>
        <p><a href="https://buylowgreen.com/product-category/vendors/canna-co-medibles/" target="_blank" rel="noopener"><strong>Canna Co. Medibles</strong></a>&nbsp;is a Canadian company proud to bring you the finest cannabis infused sweets. Every tasty treat is hand made with love.</p>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 300mg Clear Sphere",
        image:"./downloaded-images2/EDIBLES/clear-sphere-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Clear Sphere</strong>. This tasty jelly, made with&nbsp;THC distillate&nbsp;really packs a punch. Mota’s 300mg edibles is easily one of the tastiest and strongest around! It can easily be cut into 5 equal 60 mg pieces for accurate dosing. Or if you think you are up for it eat it all at once. Proudly produced and lab tested in B.C.</p>
        <p>&nbsp;</p>
        <table class="shop_attributes">
        <tbody>
        <tr class="">
        <th>INGREDIENTS</th>
        <td>THC Distillate, corn syrup, sugar , gelatin, citric acid, sorbitol, natural and artificial flavours and colours, coconut oil and carnauba wax.</td>
        </tr>
        <tr class="alt">
        <th>STRENGTH</th>
        <td>300mg THC</td>
        </tr>
        <tr class="">
        <th>STRAIN</th>
        <td><a href="https://buylowgreen.com/product-category/flowers/hybrids/" target="_blank" rel="noopener">Hybrid</a></td>
        </tr>
        <tr class="alt">
        <th>WEIGHT</th>
        <td>25 grams</td>
        </tr>
        </tbody>
        </table>
        <p>Start slow when consuming edibles, effects may be delayed and strong!</p>
        </div>`,
        price:30.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Custom 420 200mg Infused THC Gummies",
        image:"./downloaded-images2/EDIBLES/custom-420-mixed-gummies-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The same deliciousness just medicated for your healing pleasures.<b>&nbsp;Custom 420 200mg Infused THC Gummies</b>&nbsp;come loaded with THC to fix that sweet tooth craving and achy back.</p>
        <p><strong>Dose:</strong>&nbsp;<strong>20mg&nbsp;<a href="https://buylowgreen.com/" target="_blank" rel="noopener">THC</a>&nbsp;per Gummy x 10 = 200mg per pack</strong></p>
        <p><strong>Available in 6 Flavours:</strong></p>
        <ul>
        <li><strong>Cherry Cola Bottles</strong></li>
        <li><strong>Watermelon Candy</strong></li>
        <li><strong>Gummy Worms</strong></li>
        <li><strong>Sour Keys</strong></li>
        <li><strong>Variety Pack</strong></li>
        <li><strong>Sour Peaches</strong></li>
        <li><strong>OG Cola Bottles</strong></li>
        <li><strong>Cherry Blasters</strong></li>
        </ul>
        </div>`,
        price:12.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Baked Edibles Double Chocolate Cookie 30 mg THC",
        image:"./downloaded-images2/EDIBLES/doublechoc.png",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Baked Edibles Double Chocolate Cookie</strong>&nbsp;is a classic favourite for the cannabis infused double chocolate cookie! What’s better than chocolate? How about two different types of fair-trade chocolate, blended with love into these classic favorites. Body-balanced, mentally uplifting effects.</p>
        <div>
        <p>30mg THC per Cookie</p>
        <p><strong>Marijuana</strong>&nbsp;cookies</p>
        <p>Lab tested</p>
        <p>Shelf Life: 30 days before freezing</p>
        <p>Ingredients:Brown Sugar, Flour, Dark Chocolate Chips, Unsalted Butter, Dark Chocolate (Unsweetened Chocolate, Sugar, Cocoa Butter, Soy Lecithin, Natural Vanilla Flavor), Eggs, Cocoa Powder, Glucose, Vanilla Extract, Cannabis THC Extract, Baking Soda, Salt.</p>
        <p>Keep out of heat and sunlight. Must refrigerate up to freeze-by date. If putting in freezer make sure to consume before expiry date</p>
        </div>
        </div>`,
        price:7.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Sweet Jane Mini Turtles 225mg THC",
        image:"./downloaded-images2/EDIBLES/download-9-1.jpeg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mini Turtles</strong>&nbsp;are perfect for snacking throughout the day. These bite sized&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener noreferrer"><strong>edibles</strong></a>&nbsp;provide just the right amount of buzz with 75mg of THC in each&nbsp;<strong>mini turtle</strong>. Sweet Jane’s products are the perfect little treat.&nbsp;Sweet Jane&nbsp;<strong>Mini Turtles</strong>&nbsp;are an excellent treat.</p>
        <p>75mg of THC per Cookie</p>
        <p>3&nbsp;Cookies Per Pack</p>
        <p>INGREDIENTS Cannabidiol (CBD) Tetrahydrocannabinol (THC), Milk Chocolate&nbsp;(Sugar, Cocoa Butter, Chocolate, Nonfat Milk, Butter Oil, Lactose, Soy Lecithin, Vanilla, Salt), Pecans, Corn Syrup, Sugar, Palm Oil,&nbsp;Less than 1% of Sodium Caseinate, Natural and Artificial Flavors, Caramel Color SERVINGS 3 Turtles FLAVOUR&nbsp;<strong>Chocolate</strong>&nbsp;STRENGTH 75mg THC per Cookie</p>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Wigglers Gummies 120mg",
        image:"./downloaded-images2/EDIBLES/gummies-4.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Compared to say … love, there’s something eternal about a fruit-flavoured gummy. It comes down to reliability: a true candy treat sensation that’s always just like the first time. Primary candy colours? Invitingly soft texture? That timeless melt in your mouth blush of fruity flavour? Yes. Yes. Yes. Our Infused,&nbsp;<strong>Mota&nbsp;Wigglers Gummies</strong>&nbsp;do what candy gummies were born to do. And more. They’re perfectly infused with a precise measured dose of 100mg THC&nbsp;and 20mg of CBD. Discover your own comparisons.</p>
        <p><strong>Available in Sativa and Indica</strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s Edibles Halley’s Comet Phoenix Tears",
        image:"./downloaded-images2/EDIBLES/Halleys-Comet-Phoenix-Tears-250mg-THC-250mg-CBD-Marys-Edibles.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s Edibles Halley’s Comet Phoenix Tears&nbsp;</strong>is a balanced phoenix tear product which contains a 1:1 ratio of THC and CBD. Each syringe contains 1ml, with 250mg of THC, 250mg of CBD and 15mg of CBN. We suggest users to start slow, with a small drop and then slowly increase the dosage afterwards to find your desired effects. Those that are suffering from serious pain, sleep disorders and cancer, will find relief when consuming these phoenix tears.&nbsp;<em>Phoenix tears</em>&nbsp;are known to help patients with cancer, with testimonies from multiple cancer survivors.&nbsp;<em>Mary’s Edibles</em>&nbsp;uses isopropyl alcohol as an extraction method and it is fully purged out and tested to meet with Health Canada’s guidelines for acceptable trace amounts.</p>
        <p><strong>Every 1ml Syringe contains 250mg of THC, 250mg of CBD and 15mg of CBN</strong></p>
        </div>`,
        price:60.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Baked Edibles Hot Chocolate 50mg THC",
        image:"./downloaded-images2/EDIBLES/hotchoc.png",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hot Chocolate 50mg THC</strong>&nbsp;by<strong>&nbsp;Baked Edibles</strong>&nbsp;is the perfect way to keep warm during the cold Canadian winter. Decadent Belgian chocolate mix to curl up with on a blustery winters day. Grab your favourite marshmallows and whip cream because you’re in for a treat. Two servings (25mg THC) per package to spread the cheer!</p>
        <p><strong>50mg THC per package (2 servings)</strong></p>
        <p><strong>Ingredients:</strong></p>
        <p>64% Dark&nbsp;Chocolate, 38% Milk Chocolate, Dutch Cocoa, Skim Milk Powder, Cane Sugar</p>
        <p>&nbsp;</p>
        <p>With&nbsp;<strong>Baked&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">Edibles</a></strong><a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">&nbsp;</a>we are treated to the oldest&nbsp;marijuana edibles&nbsp;bakery in Canada. Located in Victoria, British Columbia,&nbsp;<em>Baked Edibles</em>&nbsp;is the benchmark when it comes to&nbsp;<strong>medibles</strong>.</p>
        </div>`,
        price:10.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Mango Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/mango-sativa-mota-247x247-1.gif",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Mango Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;: Mango<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s 500mg CBD  Tincture",
        image:"./downloaded-images2/EDIBLES/Marys-1-1-1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 500mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 500mg CBD with a dropper of 1ml/10mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>500mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:45.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s  1000mg CBD Tincture",
        image:"./downloaded-images2/EDIBLES/Marys-1000mg-CBD-Tincture.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 1000mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 1000mg CBD with a dropper of 1ml/20mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>1000mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:80.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s Edibles 250mg CBD Tears",
        image:"./downloaded-images2/EDIBLES/Marys-250MG-CBD-Tears-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s Edibles 250mg CBD Tears&nbsp;</strong>is derived from hemp and contains less than 1% THC. The medicinal benefits are great for treating symptoms of chronic pain, sleep disorders, cancer and epilepsy. With the low percentage of THC, most users will believe this will provide them with “high” effects commonly associated with THC. This is not the case for these phoenix tears, the low percent of THC will not provide such effects but rather help the medicinal benefits of CBD. CBD and THC work together in wonderful ways. We suggest users to start slowly, with a small drop and only increase if you feel no effects after the first hour. Slowly increase dosage to find your desired effects.</p>
        <p><strong>Every 1ml syringe contains 250mg of CBD</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Pure CBD Oil</p>
        </div>`,
        price:40.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s 1:1 THC/CBD  Tincture",
        image:"./downloaded-images2/EDIBLES/Marys-500mg-CBD-Tincture-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Combining the benefits of both THC and CBD our carefully crafted ratios ensure customers can get the right blend for their needs.&nbsp;<strong>1</strong><strong>:1 THC/CBD Tincture</strong>&nbsp;is suitable for all needs.</p>
        <p><strong>Each Vial Contains 500mg THC &amp; 500mg CBD&nbsp;in Grapeseed Oil</strong></p>
        <p><strong>Each 1ml Dropper Contains 10mg of THC and 10mg of CBD</strong></p>
        <p><strong>Directions: Always start with a small portion to determine your tolerance level</strong></p>
        </d`,
        price:70.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mary’s  Edibles 20mg CBD Isolate Capsules",
        image:"./downloaded-images2/EDIBLES/marys-edibles-cbd-isolate-capsules-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s Edibles 20mg CBD Isolate Capsules</strong>&nbsp;are excellent for daytime pain and anxiety maintenance. They provide pain and anxiety relief without the cerebral effects of THC. They are also great for getting a good night’s sleep! Mary’s Edibles uses Canadian grown hemp and lab tests all of their products in a Health Canada Approved facility. Each easy to swallow gelatin capsule contains 20mg of CBD.</p>
        <p><strong>Every bottle contains 25mg capsules which have 20mg of CBD each</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>CBD Isolate, Grape Seed Oil</p>
        </div>`,
        price:60.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"meddy-bear-shatter-candy",
        image:"./downloaded-images2/EDIBLES/Meddy-Bear-Gummy.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Meddy Bear Candy Shatter:&nbsp;</strong>Several pieces of quality hard candy in each package.&nbsp;The Candy Shatter contains 100mg&nbsp;<a href="https://buylowgreen.com/product-category/concentrates/" target="_blank" rel="noopener">THC</a>&nbsp;and comes in five delicious flavours.</p>
        <p><strong>Flavours: &nbsp;</strong>Butterscotch, Peppermint, Cherry, Green Apple, and Blue Raspberry</p>
        </div>`,
        price:12.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 1:1 1000mg  Tincture",
        image:"./downloaded-images2/EDIBLES/Mota-1-1-Tincture-600x600-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1:1 1000mg Tincture</strong>&nbsp;is perfect for fast, easy, and discreet anytime use. This tincture combines the power of two of the most powerful cannabis compounds, using full spectrum ingredients to provide relief from pain, stress, inflammation, insomnia, depression and anxiety.</p>
        <p><strong>500mg THC + 500mg CBD per Tincture /<em>&nbsp;16.6mg THC + 16.6mg CBD per 1ml dropper</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        </div>`,
        price:70.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 900mg Black Cherry Chocolate Cube",
        image:"./downloaded-images2/EDIBLES/Mota-Black-CuBE-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 900mg Black Cherry Chocolate Cube</strong>&nbsp;packs 900mg of THC per pack. Made from THC Distillate, each box comes with 9 pieces that are 100mg of THC each. Not recommended for novice users, we advise you take it slow and steady when it comes to these. Edibles are slow acting and may take time to “activate”. Take 1 piece every hour and half while first ingesting the product until proper dose is found. Do not exceed 1 square per hour at first.</p>
        <p><strong>Ingredients:&nbsp;</strong>Dried Organic Cherries, Sugar, Cocoa powder, THC Distillate, Whey protein powder, Whole milk powder, Soy lecithin.</p>
        </div>`,
        price:70.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Black 1000 mg THC Tincture",
        image:"./downloaded-images2/EDIBLES/Mota-Black-THC-Distillate-Tincture-1000MG-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota Black 1000 mg THC Tincture</strong><strong>&nbsp;</strong>is perfect for fast, easy, and discreet use. Using MCT oil as a carrier, THC is quickly absorbed throughout your body to relieve pain, depression, stress and anxiety. This tincture is lightly flavoured with peppermint to provide a great tasting oil that is easy to hold under your tongue for fast sublingual absorption.</p>
        <p><strong>1000mg THC</strong>&nbsp;<strong>per 15ml bottle / 66.6<em>mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Pain | Anxiety | Depression | Stress | Restlessness | Insomnia</strong></em></p>
        </div>`,
        price:70.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Blue Raspberry THC Soda Bottles",
        image:"./downloaded-images2/EDIBLES/mota-blue-raspberry-thc-soda-bottles.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota Blue Raspberry THC Soda Bottles&nbsp;</strong>will definitely bring back memories of your childhood once you take your first bite. Each package contains 100mg of THC infused with 20mg of CBD to help overall pain relief. Mota creates tons of classic candy favourites with a precisely measured dose of THC. Start slow with just one soda bottle and allow for 60 minutes to pass before feeling any effects. Increase your dosage if need be.</p>
        <p><strong>Every package contains 100mg of THC with 10 Soda Bottles</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>Glucose Syrup, Sugar, Pectic, Gelatin, Citric Acid, Cannabis, Natural and Artificial flavours, Carnuba Wax, Sodium Citrate, Fatty Acids &amp; Colour</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Blue Raspberry Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Blue-Raspbery-Jelly-Indica-120MG-THC-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Blue Raspberry Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;: Blue Raspberry<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 100mg CBD White Clear Sphere",
        image:"./downloaded-images2/EDIBLES/Mota-CBD-Sphere-600x600-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>This tasty jelly, made with&nbsp;CBD distillate&nbsp;really packs a punch.&nbsp;<strong>Mota’s 100mg CBD White Clear Sphere</strong>&nbsp;is easily one of the tastiest and strongest CBD edibles around! It can easily be cut into 5 equal 20 mg pieces for accurate dosing. Or if you think you are up for it eat it all at once. Proudly produced and lab tested in B.C.</p>
        <p><strong>Ingredients:</strong>&nbsp;CBD Distillate, corn syrup, sugar , gelatin, citric acid, sorbitol, natural and artificial flavours and colours, coconut oil and carnauba wax</p>
        <p><strong>Strength:</strong>&nbsp;100mg CBD</p>
        <p>Start slow when consuming edibles, effects may be delayed and strong!</p>
        </div>`,
        price:19.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota CBD Medicated Spray",
        image:"./downloaded-images2/EDIBLES/mota-cbd-sprays-3-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota CBD Medicated Spray</strong>&nbsp;is a sleek and discreet way to medicate using CBD. This CBD spray is infused with peppermint to provide users a minty freshness with every dose of CBD. No traces of THC are contained in this spray bottle so you wont have to worry about any psychoactive effects. Enjoy this super fast acting and effective way of medicating with CBD without smoking or eating edibles.</p>
        <p><strong>Every spray bottle contains 120mg of CBD and each spray contains approximately 1.7mg of CBD</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Grain Alcohol, CBD Oil, Peppermint Essential Oil</p>
        </div>`,
        price:30.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Blue Raspberry CBD Soda Bottles",
        image:"./downloaded-images2/EDIBLES/Mota-CBD_Soda_Bottles_300mg-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><b>Mota Blue Raspberry CBD Soda Bottles</b>&nbsp;provides users with a delicious, precisely&nbsp;measured dose of CBD. Each bottle contains 33mg of CBD which is why we suggest users to start with half of a soda bottle. Increase your dosage to find your desired effects, it could take 60 minutes before you feel any effects. All of Mota Edibles products are made and lab tested in Canada.</p>
        <p><strong>Every package contains 300mg of THC with 9 Soda Bottles</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;glucose syrup, sugar, pectin, gelatin, citric acid, cbd isolate, natural and artificial flavours, carnauba wax, sodium citrate, fatty acids and colour</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 300  mg CBD Sour Squares",
        image:"./downloaded-images2/EDIBLES/Mota-CBDSourSquares-300x300-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 300 mg CBD Sour Squares</strong>&nbsp;are fruit flavoured gummies which make an excellent choice for those looking to slowly dose throughout the day. Each gummy is infused precisely infused with CBD to provide accurate dosages. These flavourful squares are all you need to combat symptoms of pain, nausea or stress during the day.</p>
        <p><strong>Each 300mg package contains 15 gummies which have 20mg of CBD each</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>Corn Syrup, Water, Cornstarch, Citric Acid, Natural and Artificial Flavors, CBD isolate, Artificial Colour</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Cherry Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Cherry-Jelly-120MG-indica.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Cherry Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener noreferrer"><strong><em>Insomnia</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener noreferrer"><strong><em>Stress</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener noreferrer"><strong><em>Anxiety</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener noreferrer"><strong><em>Pain</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener noreferrer"><strong><em>Inflammation</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener noreferrer"><strong><em>Depression</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener noreferrer"><strong><em>Lack of Appetite</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener noreferrer"><strong><em>Euphoric</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener noreferrer"><strong><em>Nausea</em></strong></a></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax</p>
        <p><strong>FLAVOUR</strong>&nbsp;:&nbsp;Cherry</p>
        <p><strong>STRAIN:&nbsp;</strong><a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener noreferrer"><strong>Indica</strong></a></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Sativa Medicated Cherry Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-CherryJelly-back.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Sativa Medicated Cherry Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;:&nbsp;Cherry<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/sativa/" target="_blank" rel="noopener">Sativa</a></strong></p>
        </div>`,
        price:25.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Chocolate Dipped Sour Key",
        image:"./downloaded-images2/EDIBLES/mota-choc-sour-key-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota Chocolate Dipped Sour Key</strong>&nbsp;is a childhood classic! This delicious sour key is dipped in 100mg of medicated milk chocolate.</p>
        <p><strong>Each order contains 1, 100mg sour key</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Sour Key, Milk Chocolate, Cannabis, Soy Lecithin</p>
        </div>`,
        price:12.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 330mg THC Mint Chocolate Cookie",
        image:"./downloaded-images2/EDIBLES/mota-chocolate-mint-cookie.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 330mg THC Mint Chocolate Cookie</strong>&nbsp;is intended for high tolerance patients. The mint chocolate glazed over this delicious cookie is medicated to offer a heavy, sedative buzz.</p>
        <p><strong>Each order includes one 330mg cookie</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Flour, Eggs, White Sugar, Baking Powder, Cannabis Oil, Vanilla Extract, Lemon Juice, Confectioners Sugar, Coconut Oil</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Sativa Cola Bottles 120mg",
        image:"./downloaded-images2/EDIBLES/mota-cola-bottles-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Want to get your fill of sweets and stay medicated at the same time? Why not take a dip into&nbsp;<strong>Mota’s 120mg Sativa Cola Bottles.</strong>&nbsp;Every pack includes tasty Cola Bottles that are medicated for all your needs. With a 100mg of THC and 20mg of CBD in each pack you get the best of both worlds. Who says you can’t have your food and play with it?</p>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 180mg THC Cotton Candy",
        image:"./downloaded-images2/EDIBLES/Mota-CottonCandy.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>180mg of THC Cotton Candy</strong>&nbsp;gives those sweet lovers that extra kick. The effects are strong as the THC binds with the sugar to enhance the psychoactive effects and medicinal benefits. Nothing like a tasty treat to keep you medicated at the same time.</p>
        <p><strong>Every bag of Cotton Candy contains 180mg of THC</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;sugar, Cannabis, Natural and Artificial Flavour and Colour</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 300mg Milk Chocolate Bar",
        image:"./downloaded-images2/EDIBLES/Mota-Dark-Chocolate-Bar-300MG.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><em>Mota Milk chocolate</em>&nbsp;and&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener noreferrer">cannabis&nbsp;</a>make a dynamic couple worth trying. Divided into 6 squares, these medicated&nbsp;chocolate bars are convenient because of their easy dose nature. Ranging in both potency and flavour, these&nbsp;allow for flexible&nbsp;methods of medicating. Each order includes one bar.&nbsp;<strong>Mota 300mg Milk Chocolate Bars</strong>&nbsp;are great for dosing medicine.</p>
        <p><strong><em>Insomnia | Pain | Stress | Anxiety | Appetite Loss | Inflammation | Nausea</em></strong></p>
        <p>INGREDIENTS Milk Chocolate, Cannabis, Soy Lecithin, Flavour (Contains Nuts) FLAVOUR Milk Chocolate STRENGTH 300mg THC STRAIN Hybrid WEIGHT 50 grams</p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota THC Infused Honey",
        image:"./downloaded-images2/EDIBLES/Mota-Honey-200mgTHC.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>THC infused Honey</strong>&nbsp;by&nbsp;<strong>Mota</strong>&nbsp;contains 200mg of&nbsp;<strong>THC</strong>&nbsp;in a 120ml jar. Made by using only organic honey and cannabis in Canada! Each tablespoon will contain about 8mg of THC, making this a delicious treat for new and experienced users.</p>
        <p><strong>120ml Jar containing 200mg of THC infused honey</strong></p>
        <p><strong>Ingredients:</strong></p>
        <p>Organic Honey and Cannabis</p>
        </div>`,
        price:35.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota CBD Infused Honey",
        image:"./downloaded-images2/EDIBLES/Mota-Honey-80mgCBD-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>CBD infused Honey</strong>&nbsp;by&nbsp;<strong>Mota</strong>&nbsp;contains 80mg of&nbsp;<b>CBD&nbsp;</b>in a 120ml jar. Made by using only organic honey and CBD oil in Canada! Each tablespoon will contain about 3.3mg of CBD, making this a delicious treat for new and experienced users.</p>
        <p><strong>120ml Jar containing 80mg of CBD infused honey</strong></p>
        <p><strong>Ingredients:&nbsp;</strong>Organic Honey and CBD Oil</p>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 125mg THC Dweebs",
        image:"./downloaded-images2/EDIBLES/mota-indica-grape-jelly.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 125mg THC Dweebs</strong>&nbsp;bring back that childhood favourite candy pack. For anyone looking to medicate discreetly using a tasty candy, this is for you. These are also great for relieving symptoms of stress, anxiety, pain, depression, all while keeping your body in a relaxed state.</p>
        <p>Every 25g pack contains 125mg of THC infused Dweebs.</p>
        <p>&nbsp;</p>
        <p><strong>Ingredients:</strong></p>
        <p>Sugar, Corn Syrup, Cannabis, Malic Acid, Arnuba Wax, Artificial flavour and Colouring</p>
        </div>`,
        price:12.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Tincture 900  mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Indica-THC-Tincture-300x300-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota’s Indica Tincture</strong>&nbsp;<strong>900mg THC</strong>&nbsp;is perfect for fast, easy, and discreet use. This tincture has deeply relaxing, soothing body&nbsp;effects that are great for relieving problems with sleep, various pain conditions, and restlessness.</p>
        <p><strong>900mg THC</strong>&nbsp;<strong>per bottle /&nbsp;<em>30mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Insomnia | Stress | Pain | Appetite Loss | Restlessness | Anxiety | Depression | Muscle Spasms</strong></em></p>
        </div>`,
        price:50.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 330mg THC Lemon Bomb Cookie",
        image:"./downloaded-images2/EDIBLES/mota-lemon-bomb-cookie-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 330mg THC Lemon Bomb Cookie</strong>&nbsp;is intended for high tolerance patients. The lemon glazed over this delicious cookie is medicated to offer a heavy, sedative buzz.</p>
        <p><strong>Each order includes one 330mg cookie</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Flour, Eggs, White Sugar, Baking Powder, Cannabis Oil, Vanilla Extract, Lemon Juice, Confectioners Sugar, Coconut Oil</p>
        </div>`,
        price:25.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 125mg Hard Candy",
        image:"./downloaded-images2/EDIBLES/Mota-Lemon-Hard-Candy-125MG-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 125mg Hard Candy</strong>&nbsp;comes in Favorited flavour variations. These are made with a precise dose of THC which will slowly release once consumed. Each candy contains 12.5mg of THC which makes dosing light and discrete for on the go use.</p>
        <p>Each pack contains 10 hard candies</p>
        <p><strong>Flavours:</strong></p>
        <ul>
        <li>Root Beer</li>
        <li>Watermelon</li>
        <li>Green Apple</li>
        <li>Lemon</li>
        <li>Cherry</li>
        </ul>
        </div>`,
        price:12.50,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 150mg Ice Tea Mix",
        image:"./downloaded-images2/EDIBLES/Mota-Mango-Jelly-Indica-120MG-THC-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 150mg Ice Tea Mix</strong>&nbsp;is perfect to complete your hot summer day. This medicated beverage contains the perfect blend of citrus and tea flavours with a nice splash of sugar sweetness. Mix in with some water and add some ice to make it much more cooling.</p>
        <p>&nbsp;</p>
        <p><b>Ingredients:&nbsp;</b>Sugar, Citric Acid, Cannabis, Tea Solids, Tri-Calcium Phosphate, Natural and Artificial Flavours.</p>
        </div>`,
        price:14.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 150mg Canna Cocoa",
        image:"./downloaded-images2/EDIBLES/Mota-Medicated-Canna-Cocoa-150MG.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 150mg Canna Cocoa</strong>&nbsp;is perfect for warming you up on those cold nights to help relax and wind down in comfort. If used with milk, dairies or fats, the THC will be activated at its fullest potential. Included in every pack is tiny marshmallows which will be sure to bring back some childhood memories.</p>
        <p>Each 25g pack contains 150mg of THC</p>
        <p>&nbsp;</p>
        <p><strong>Ingredients:</strong>&nbsp;Powdered Milk, Sugar, Cannabis, Cocoa Powder, Salt, Marshmallows</p>
        </div>`,
        price:14.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 150mg THC Lollipops",
        image:"./downloaded-images2/EDIBLES/Mota-Medicated-Lollipops-150MG-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 150mg THC Lollipops</strong>&nbsp;are perfect for the sweet tooth on the go. Each order includes one lollipop. Now made with&nbsp;<strong>THC Distillate</strong>&nbsp;for a cleaner taste! Great for relieving stress, depression, anxiety, and pain. All while relaxing the body!</p>
        <p><strong>Ingredients:</strong>&nbsp;Organic Cane Sugar, Isomalt, Cannabis Extract, Natural Flavour and Colour</p>
        <p><strong>Flavours:</strong></p>
        <ul>
        <li>Blueberry</li>
        <li>Strawberry</li>
        <li>Grape</li>
        <li>Lemon Lime</li>
        <li>Raspberry</li>
        <li>Watermelon</li>
        </ul>
        </div>`,
        price:14.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 300mg Dark Chocolate Bar",
        image:"./downloaded-images2/EDIBLES/mota-milk-chocolate-300mg-thc-360x240-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><em>Mota Dark chocolate</em>&nbsp;and&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis&nbsp;</a>make a dynamic couple worth trying. Divided into 6 squares, these medicated&nbsp;chocolate bars are convenient because of their easy dose nature. Ranging in both potency and flavour, these&nbsp;allow for flexible&nbsp;methods of medicating. Each order includes one bar.&nbsp;<strong>Mota 300mg Dark Chocolate Bars</strong>&nbsp;are great for dosing medicine.</p>
        <p><em><strong>Insomnia | Pain | Stress | Anxiety | Appetite Loss | Inflammation | Nausea</strong></em></p>
        <table class="shop_attributes">
        <tbody>
        <tr class="">
        <th>INGREDIEN</th>
        <td>Dark Chocolate, Cannabis, Soy Lecithin, Flavour (Contains Nuts)</td>
        </tr>
        <tr class="alt">
        <th>FLAVOUR</th>
        <td>Dark Chocolate</td>
        </tr>
        <tr class="">
        <th>STRENGTH</th>
        <td>300mg THC</td>
        </tr>
        <tr class="alt">
        <th>STRAIN</th>
        <td>Hybrid</td>
        </tr>
        <tr class="">
        <th>WEIGHT</th>
        <td>50 grams</td>
        </tr>
        </tbody>
        </table>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Peach Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Peach-Jelly-Indica-120MG-THC-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Peach Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;:&nbsp;Peach<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 330mg THC Peanut Butter Cookie",
        image:"./downloaded-images2/EDIBLES/mota-peanut-butter-cookie-1.jpg",
        description:`<div class="woocommerce-tabs container tabbed-content">
        <div class="tab-panels">
        <div id="tab-description" class="panel entry-content active">
        <p><strong>Mota 330mg THC Peanut Butter Cookie</strong>&nbsp;is intended for high tolerance patients. The peanut butter glazed over this delicious cookie is medicated to offer a heavy, sedative buzz.</p>
        <p><strong>Each order includes one 330mg cookie</strong></p>
        <p><strong>Ingredients:</strong> Flour, Eggs, White Sugar, Baking Powder, Cannabis Oil, Vanilla Extract, Lemon Juice, Confectioners Sugar, Coconut Oil</p>
        </div>
        </div>
        </div>`,
        price:25.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Sativa Tincture  900 mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Sativa-THC-Tincture-300x300-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota’s Sativa Tincture</strong>&nbsp;<strong>900mg THC</strong>&nbsp;is perfect for fast, easy, and discreet daytime use. This tincture provides relief from pain and stress while keeping you motivated throughout the day.</p>
        <p><strong>900mg THC</strong>&nbsp;<strong>per tincture /&nbsp;<em>30mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Stress | Pain | Appetite Loss | Depression | Muscle Spasms | Restlessness</strong></em></p>
        </div>`,
        price:50.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 1:1 Sleep  Tincture",
        image:"./downloaded-images2/EDIBLES/Mota-Sleep-Tincture-1to1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1:1 Sleep Tincture</strong>&nbsp;is perfect for those looking to have a great nights sleep! This special formulated tincture consists of indica based THC oil, CBD isolate, organic botanicals and melatonin. This combination will help users achieve a better and faster sleep every night. The 2 most powerful cannabis compounds, THC and CBD work really well together to give you a goods night sleep.</p>
        <p><strong>500mg THC + 500mg CBD per Tincture /<em>&nbsp;16.6mg THC + 16.6mg CBD per 1ml dropper&nbsp;+ 5mg Melatonin per 1ml</em></strong></p>
        <p><strong>Suggested Use:</strong>&nbsp;Shake well and Ingest .5ml &nbsp;to 1ml orally before bedtime.</p>
        </div>`,
        price:70.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 330mg THC Strawberry Chocolate Cookie",
        image:"./downloaded-images2/EDIBLES/mota-strawberry-chocolate-cookie-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 330mg THC Strawberry Chocolate Cookie</strong>&nbsp;is intended for high tolerance patients. The strawberry chocolate glazed over this delicious cookie is medicated to offer a heavy, sedative buzz.</p>
        <p><strong>Each order includes one 330mg cookie</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Flour, Eggs, White Sugar, Baking Powder, Cannabis Oil, Vanilla Extract, Lemon Juice, Confectioners Sugar, Coconut Oil</p>
        </div>`,
        price:25.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Strawberry Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/mota-strawberry-jelly-indica.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Strawberry Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener noreferrer"><strong><em>Insomnia</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener noreferrer"><strong><em>Stress</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener noreferrer"><strong><em>Anxiety</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener noreferrer"><strong><em>Pain</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener noreferrer"><strong><em>Inflammation</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener noreferrer"><strong><em>Depression</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener noreferrer"><strong><em>Lack of Appetite</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener noreferrer"><strong><em>Euphoric</em></strong></a><strong><em>&nbsp;|&nbsp;</em></strong><a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener noreferrer"><strong><em>Nausea</em></strong></a></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;:&nbsp;Strawberry<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Watermelon Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/Mota-Watermelon-Jelly-120mg-Indica.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Watermelon Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;:&nbsp;Watermelon<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota White 375 mg CBD Tincture",
        image:"./downloaded-images2/EDIBLES/Mota-White-CBD-Isolate-Tincture-375MG-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota White 375 mg CBD Tincture</strong>&nbsp;is made using CBD isolate to provide a tasteless, fast acting, discrete form of CBD administration. Using MCT oil as a carrier, CBD is quickly absorbed throughout your body to relieve pain, inflammation, anxiety, depression, stress, and restlessness.</p>
        <p><strong>375mg CBD</strong>&nbsp;<strong>per 15ml bottle / 25<em>mg CBD per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/2 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        <p><em><strong>Pain | Inflammation | Anxiety | Depression | Stress | Restlessness | Insomnia</strong></em></p>
        </div>`,
        price:60.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Medicated Grape Jelly 120mg THC",
        image:"./downloaded-images2/EDIBLES/no_watermark_grape-jelly-sativa-mota-600xd600.gif",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Made from scratch, these jellies are infused with 120mg of THC. Each package contains one<strong>&nbsp;Indica Medicated Grape Jelly</strong>&nbsp;which is also available in a range of delicious flavours. Although Intended for high tolerance patients, it is also great for low tolerance users when split into smaller doses.</p>
        <p><strong>Each order includes one jelly.</strong></p>
        <p>&nbsp;</p>
        <p><strong><em><a href="https://buylowgreen.com/product-tag/insomnia/" target="_blank" rel="noopener">Insomnia</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/stress/" target="_blank" rel="noopener">Stress</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/anxiety/" target="_blank" rel="noopener">Anxiety</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/pain/" target="_blank" rel="noopener">Pain</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/inflammation/" target="_blank" rel="noopener">Inflammation</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/depression/" target="_blank" rel="noopener">Depression</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/lack-of-appetite/" target="_blank" rel="noopener">Lack of Appetite</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/euphoric/" target="_blank" rel="noopener">Euphoric</a>&nbsp;|&nbsp;<a href="https://buylowgreen.com/product-tag/nausea/" target="_blank" rel="noopener">Nausea</a></em></strong></p>
        <p>&nbsp;</p>
        <p><strong>INGREDIENTS:&nbsp;</strong>Corn Syrup, Sugar, Cannabis Oil, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax<br>
        <strong>FLAVOUR</strong>&nbsp;:&nbsp;Grape<br>
        <strong>STRAIN:&nbsp;<a href="https://buylowgreen.com/product-category/flowers/indica/" target="_blank" rel="noopener">Indica</a></strong></p>
        </div>`,
        price:13.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"SeC Strawberry Feels 50 mg CBD",
        image:"./downloaded-images2/EDIBLES/SeC-Strawberry-Feel-cbd-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>SeC Strawberry Feels 50mg CBD</strong>&nbsp;contains 2 pieces of candy in each pack. These delicious gummies each have 25mg of&nbsp;<em>CBD</em>&nbsp;each which make the perfect edible to obtain your daily dose of CBD!</p>
        <p><strong>Ingredients:</strong>&nbsp;Organic Raw Cane Sugar, Glucose Syrup, Water, Gelatin, Citric Acid, Organic Virgin Coconut Oil, Natural Flavour, Colouring</p>
        </div>`,
        price:8.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota Sour Squares",
        image:"./downloaded-images2/EDIBLES/soursquares-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Each&nbsp;<strong>Mota Sour Squares</strong>&nbsp;bag&nbsp;contains&nbsp;<strong>150mg THC</strong>&nbsp;in the whole package. Each square contains 10mg THC. Perfect option for treating insomnia, pain, or to kick your stress or anxiety for the day.</p>
        <p>Compared to say … love, there’s something eternal about a&nbsp;fruit-flavoured gummy. It comes down to reliability: a true candy treat sensation that’s always just like the first time. Primary candy colours? Invitingly soft texture? That timeless melt in your mouth blush of fruity flavour? Yes. Yes. Yes. Our Infused Gummies do what candy gummies were born to do. And more. They’re perfectly infused with a precise measured dose of 150mg THC. Discover your own comparisons.</p>
        <p>&nbsp;</p>
        <table class="shop_attributes">
        <tbody>
        <tr class="">
        <th>INGREDIENTS</th>
        <td>Corn Syrup, Water, Cornstarch, Citric Acid, Natural and Artificial Flavors, Cannabis, Artificial Color</td>
        </tr>
        <tr class="alt">
        <th>STRENGTH</th>
        <td>150mg THC</td>
        </tr>
        <tr class="">
        <th>STRAIN</th>
        <td><a href="https://buylowgreen.com/product-category/flowers/hybrids/" target="_blank" rel="noopener">Hybrid</a></td>
        </tr>
        <tr class="alt">
        <th>WEIGHT</th>
        <td>50 grams</td>
        </tr>
        </tbody>
        </table>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Sugar Jack’s 200mg Assorted Gummies",
        image:"./downloaded-images2/EDIBLES/SugarJacks-Assorted-Gummies-Lime-Front-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <div class="product-short-description">
        <p><strong>Sugar Jack’s 200mg Assorted Gummies&nbsp;</strong>are handcrafted, premium&nbsp;<a href="https://holyweedshelf.com/product-category/edibles/" target="_blank" rel="noopener noreferrer">edibles</a>&nbsp;that’re made in beautiful BC. Each assorted gummy is infused with high quality distillate extract during the cooking process. Sugar Jack’s 200mg Assorted Gummies contain 10 gummies that have 20mg of THC in each. Enjoy getting lifted from these delicious all natural flavoured gummies.</p>
        <p><strong>Every 200mg THC package contains 10 assorted gummies</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Gelatin, Cane Sugar, Corn Syrup, Manuka Honey, THC Distillate, Citric Acid</p>
        </div>
        </div>`,
        price:18.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"vapecartridges Pack",
        image:"./downloaded-images2/EDIBLES/sweet-jane-double-dunked-white-cream-cookies-.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Sweet Jane’s&nbsp;<strong>White Chocolate Cream Cookies</strong>&nbsp;are perfect for snacking throughout the day. These bite sized&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener"><strong>edibles</strong></a>&nbsp;provide just the right amount of buzz with 75mg THC in each&nbsp;<strong>white chocolate covered&nbsp;</strong><b>cream cookies</b>. Sweet Jane’s products are the perfect little treat.</p>
        <p><strong>2 Cookies in Each Package / 75mg THC Each</strong></p>
        <p><em><strong>Insomnia&nbsp;|&nbsp;Pain&nbsp;|&nbsp;Stress&nbsp;|&nbsp;Anxiety&nbsp;|&nbsp;Lack of Appetite&nbsp;|&nbsp;Inflammation&nbsp;|&nbsp;Nausea</strong></em></p>
        <p>&nbsp;</p>
        <table class="shop_attributes">
        <tbody>
        <tr class="">
        <th>INGREDIENTS</th>
        <td>Cannabidiol (CBD) Tetrahydrocannabinol (THC), White&nbsp;Chocolate (Sugar, Cocoa Butter,Unsweetened Chocolate, Lactose, Soy Lecithin, Polyglycerol, Polyricinoleate), Enriched Wheat Flour, Icing Sugar, Palm and Canola Modfied Palm Oil, Cocoa, Corn Starch, Yellow Corn Flour, Glucose, Salt, Baking Soda, Natural and Artificial Flavours,&nbsp;Soy Lecithin, Ammonium Bicarbonate, Citric Acid, May Contain Milk and Egg</td>
        </tr>
        <tr class="alt">
        <th>SERVINGS</th>
        <td>2 Cookies</td>
        </tr>
        <tr class="">
        <th>FLAVOUR</th>
        <td>White Chocolate</td>
        </tr>
        <tr class="alt">
        <th>STRENGTH</th>
        <td>75mg THC per Cookie</td>
        </tr>
        </tbody>
        </table>
        </div>`,
        price:15.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"The Budibles 200mg THC Gummies",
        image:"./downloaded-images2/EDIBLES/The-Budibles-Medicated-Wigglyworms-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>The Budibles 200mg THC Gummies&nbsp;</strong>come in 5 nostalgic variations! Enjoy<em>&nbsp;200mg of THC</em>&nbsp;in the form of wiggly worms, cola bottles, green frogs, wild berries and gummy bears. The Budibles have created these edibles using precise dosing measurement to make sure consumers always get a proper dose. Each candy is potent so we suggest users to start slow and only increase your dose if feelings are null after an hour. All bags contain 6-10 gummy candies, depending on the size of the candy and flavour.</p>
        <p><strong>Every package contains 200mg of THC</strong></p>
        </div>`,
        price:18.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota 150mg Wild Watermelon Sour Belts",
        image:"./downloaded-images2/EDIBLES/watermelon-belt-3-600x600-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Mota 150mg Wild Watermelon Sour Belts</strong>&nbsp;are one of the latest additions to the family of Mota candies. Made with&nbsp;<a href="https://buylowgreen.com/product-category/concentrates/" target="_blank" rel="noopener">THC distillate</a>. Truly mouth watering goodness that will make you feel like a kid again! Proudly made and lab tested in Canada.</p>
        <p>&nbsp;</p>
        <p><em><strong>Insomnia&nbsp;|&nbsp;Pain&nbsp;|&nbsp;Stress&nbsp;|&nbsp;Anxiety&nbsp;|&nbsp;Lack of Appetite&nbsp;|&nbsp;Inflammation&nbsp;|&nbsp;Nausea</strong></em></p>
        </div>`,
        price:20.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        name:"Mota BHO Bots",
        image:"./downloaded-images2/EDIBLES/watermelonbhobots.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>These<strong>&nbsp;BHO bots</strong>&nbsp;are made for those who require very high levels of&nbsp;<a href="https://buylowgreen.com/" target="_blank" rel="noopener">medication&nbsp;</a>in a simple, discreet hard candy. Despite their space invader demeanour, these<strong>&nbsp;bots</strong>&nbsp;are actually sweet and comforting. Each Bhobot is perfectly infused with a high dose of 120mg pure THC, extracted from the finest&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis</a>. Package comes with two Bho Tots for a total of 240mg THC.</p>
        <p>Vancouver Island – a world apart, where sea and wild mountains meet. It is here that Canada’s most passionate and independent-minded growers made their home. And it’s here they learned how to grow Canada’s best medicinal quality cannabis.</p>
        <p><strong>240mg THC Total</strong></p>
        </div>`,
        price:9.00,
        category:"EDIBLES",
        countInStock: 30,
    },
    {
        image:"./downloaded-images2/FLOWERS/HYBRID/ak-47-kush.jpg",
        name:"AK-47 Kush",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>AK 47 Weed is great for preventing the symptoms of depression and pain. Pungent Skunk odor with a hint of a woodsy spicy smell<br>
        </strong><strong>Type</strong>: 65% Sativa 35% Indica<br>
        <strong><br>
        </strong><strong>Smell</strong>: Pungent Skunk odor with a hint of a woodsy spicy smell<br>
        <strong><br>
        </strong><strong>Effects</strong>: Felt immediately with a strong cerebral high followed later by a good body buzz that comes on gradually .This strain has a long-tasting High that ranges anywhere from 1.5 hours to 2 hours</p>
        <p><strong>Potency</strong>: THC 21.15% CBD 0.22%</p>
        <p><strong><br>
        </strong><strong>Good Strain For</strong>: Great for preventing the symptoms of depression and pain Great for preventing the symptoms of depression and pain</p>
        </div>`,
        price:50.00,
        category:"HYBRID",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 98,
            },
            {
                name: "28 Grams",
                price: 195,
            }]
    },
    {
        name:"Girl  Scout Cookies",
        image:"./downloaded-images2/FLOWERS/HYBRID/Girl-Scout-Cookies-4.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>GSC</strong>, formerly&nbsp;known as&nbsp;<em>Girl Scout Cookies</em>,&nbsp;is an&nbsp;OG Kush&nbsp;and&nbsp;Durban Poison&nbsp;hybridcross whose reputation grew too large to stay within the borders of its California homeland. With a&nbsp;sweet&nbsp;and&nbsp;earthy&nbsp;aroma, the&nbsp;<strong>Girl Scout Cookies strain</strong>&nbsp;launches you to&nbsp;euphoria’s top floor where full-body&nbsp;relaxation&nbsp;meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe&nbsp;pain,&nbsp;nausea, and&nbsp;appetite loss.</p>
        <p>There are several different&nbsp;phenotypes&nbsp;of the&nbsp;<em>GSC</em>&nbsp;strain including&nbsp;Thin Mint&nbsp;and&nbsp;Platinum Cookies, which exhibit some variation in appearance and effect. Typically, however,&nbsp;<strong>GSC</strong>&nbsp;expresses its beauty in twisting green&nbsp;calyxes&nbsp;wrapped in purple leaves and fiery orange hairs. Patients and consumers looking to cultivate this cannabis staple themselves should wait 9 to 10 weeks for their indoor plants to finish flowering.</p>
        <p>GSC has some incredibly powerful effects that are beneficial to the medical community in numerous ways. First and foremost, this is a great strain for treating chronic pain, inflammation, muscle tension, and cramps. Its highly sedative properties will have you feeling relief in no time. Additionally, many use this strain as a stress reliever. The tranquilizer-like feeling of this bud puts you in a place of complete relaxation, slaying stress and even getting you ready for a good night’s sleep.</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Creative</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Fatigue,&nbsp;Pain,&nbsp;Insomnia</p>
        <p><strong>Flavours –&nbsp;</strong>Earthy,&nbsp;Sweet,&nbsp;Pungent</p>
        </div>`,
        price:50.00,
        category:"HYBRID",
        countInStock: 30,
        options : [
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 199,
            }
        ]
    },
    {
        name:"GIRL SCOUT  COOKIES MOONROCKS",
        image:"./downloaded-images2/FLOWERS/HYBRID/Girl-Scout-Cookies-Moonrocks-.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Girl Scout Cookies Moonrocks is an indica-dominant hybrided product with a strong sativa component (40:60 sativa/indica ratio). This product can reach THC levels of up to 57.2%, meaning it’s one of the most potent moonrocks available to medical marijuana patients. This product provides the best aspects of both sativa and indica, and the high is powerful, happy, and euphoric, but with couch-lock body effects and feelings of lethargy. Girl Scout Cookies moonrocks tastes sweet and earthy, and it smells much the same.</p>
        <p>Benefits Of Girls Scout Cookies Moonrocks</p>
        <p>Relieves Anxiety &amp; Stress<br>
        One of the most popular and well-known uses of Cannabis Essential Oil is to get relief from stress and anxiety. The natural compounds found in this oil, including the famed THC, which is what gives cannabis the distinction of a drug in many countries, are very good for releasing pleasure hormones and relaxing the mind, reducing stress and inducing a sense of calmness and relaxation.</p>
        <p>Promotes Good Sleep<br>
        For people who suffer from insomnia, constant anxiety during the night, or simply struggle to get a sound, restful night of undisturbed sleep, Cannabis Essential Oil works like a charm. By relaxing the body and mind, and inducing a lower energy level, it will be easier to get your heart rate down and clear your head before a long night of peaceful slumber.</p>
        <p>Appetite Booster<br>
        It is well known that people who consume cannabis in other forms notice increased appetite, famously called “the munchies”. However, Cannabis Essential Oil can help regulate your appetite and induce hunger, while also stimulating your digestive system to operate at a regular level. This can help people who want to gain weight quickly, particularly after an extended illness or injury recovery.</p>
        <p>Pain Reliever<br>
        Cannabis Essential Oil works as a great pain reliever and is regularly suggested for people with inflammation, chronic pain, and even emergency pain relief. There is a very good reason why people who suffer from cancer often turn to cannabis-related options, including Cannabis Essential Oil, when the pain of chemotherapy or the disease itself becomes unbearable.</p>
        </div>`,
        price:50.00,
        category:"HYBRID",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 95,
            },
            {
                name: "28 Grams",
                price: 240,
            }
        ]
    },
    {
        name:"GRAND DADDY PURPLE MOONROCKS",
        image:"./downloaded-images2/FLOWERS/HYBRID/Grand-Daddy-Purple-Moonrocks.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Grand Daddy Purple moonrocks is an Indica dominant product with a THC level of about 52.5%<br>
        What really sets this product apart from the others is that it is easy to identify by the taste alone. Its taste lingers on the tongue for longer and will help you feel relaxed. The product has a serious kick to it and its psychoactive effects are evidently detectable in both body and mind. It manages to deliver an overwhelming feeling of physical relaxation and cerebral euphoria. You will find yourself fixed in one spot while your thoughts float in a dreamy buzz for the duration of Grand Daddy Purple moonrocks effects. Just like any other indica dominant moonrocks, it is primarily used for medical purposes. The product is quite effective for patients suffering from appetite loss, pain, insomnia, muscle spasms and stress.</p>
        </div>`,
        price:50.00,
        category:"HYBRID",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 155,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ]
    },
    {
        name:"GREEN CRACK MOONROCKS",
        image:"./downloaded-images2/FLOWERS/HYBRID/Green-Crack-Moonrocks.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Green Crack moonrocks is made out of the typical green crack marijuana strain with a dorminant sativa THC level of 50% which is more than enough to bless your high , good for medicinal and best for recreational purposes .</p>
        <p>Despite mostly indica physical characteristics, Green Crack moonrocks has a strong and buzzy sativa high. It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake moonrock. Green Crack moonrock potency can make mundane like dishes and laundry tasks more interesting. It’s also an inspiring smoke — its sharp sense of focus can help users zero in on creative projects or can draw attention to the nuances in a piece of music or a movie. Green Crack moonrocks can also have some slightly psychedelic effects, including visual distortions and, particularly, an odd sense of time dilation. Because it can leave users feeling uplifted and fairly wired, this moonrock isn’t recommended for use late at night. Because it doesn’t have many physically relaxing indica properties, Green Crack moonrocks doesn’t have a wide range of medical benefits. However, its energizing effects can be great for freeing users from fatigue. Green Crack can also aid those suffering from anxiety and depression, helping them to live in the moment — although in large enough doses, the tendency towards recursive cerebral thinking can plunge some into panic or paranoia.</p>
        <p>Green Crack moonrocks is more likely to make users energized and inspired than strung out and manic. Providing the best of what sativa varieties have to offer, it’s a great moonrock for enhancing your appreciation of your surroundings or simply as a way to help you get up and go. It’s also unique in its potency — even for more experienced cannabis fans, a little bit of this controlled substance can go a long way.</p>
        </div>`,
        price:80.00,
        category:"HYBRID",
        countInStock: 30,
        options : [
            {
                name: "7 Grams",
                price: 80,
            },
            {
                name: "14 Grams",
                price: 115,
            },
            {
                name: "28 Grams",
                price: 240,
            }
        ]
    },
    {
        name:"Juicy Fruit  (28 Grams)",
        image:"./downloaded-images2/FLOWERS/HYBRID/Juicy-Fruit.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Juicy Fruit</strong>&nbsp;is the original name of Sensi Seeds, being a&nbsp;sativa-dominant&nbsp;hybrid that they now call Fruity Juice, perhaps to avoid trademark infringement. Juicy Fruit smells and tastes sweet and smooth, and many users describe it tasting like Pina Colada and dark berries or plums. The buds are colorful and may exhibit the entire spectrum of cannabis coloring. Juicy Fruit’s parents are two landraces: a Thailand Sativa and an Indica from Afghanistan.</p>
        <p>Sativa is dominant in Juicy Fruit. It boosts moods, fills users with energy and seems to create a ‘time warp’,&nbsp;slowing the perception of time for the users. The high can last up to three hours and can stimulate focus and creativity. The cerebral effects taper off without leaving users feeling drained. As a result, the strain is often prescribed as daytime relief for depression, stress, and anxiety. A mild body high may also accompany the cerebral effects and can assist in alleviating pain and nausea.</p>
        <p>This strain may be hard to grow outdoors, but it thrives indoors or in a greenhouse.&nbsp;Juicy Fruit’s Sativa dominance shines through again as plants can reach up to three meters in height. The strain needs between 50 and 60 days to finish flowering. It can reportedly produce a large yield with up to 20% THC.</p>
        <p>&nbsp;</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;&nbsp;</strong>Sweet,&nbsp;Fruity,&nbsp;Berry</p>
        <p><strong>Effects:&nbsp;</strong>Focused,&nbsp;Uplifted,&nbsp;Energetic,&nbsp;Euphoric,&nbsp;Creative</p>
        <p><strong>Medical Uses:&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Anxiety,&nbsp;Pain,&nbsp;Nausea</p>
        <p>&nbsp;</p>
        </div>`,
        price:240.00,
        category:"HYBRID",
        countInStock: 30,
    },
    {
        name:"Lemon  Skunk",
        image:"./downloaded-images2/FLOWERS/HYBRID/lemon-skunk.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Lemon Skunk</strong>&nbsp;is an award-winning Sativa hybrid, known for its lemon flavor and a THC count as high as 22%. It made the High Times list of top 10 strains in 2009.The aroma is Skunky and sweet while the flavor is reminiscent of sweet lemons and other citrus fruit. Lemon Skunk delivers a heady, peppy cerebral high that comes with a boost of energy and creativity, a dose of happiness, and a euphoric kick. It’s an uplifting yet lazy experience. The sativa genes offer effective treatment for depression, nausea, chronic pain, and everyday stresses. CBD levels are a bit higher than average in this strain, roughly 0.5% in some tests, but not high enough to recommend it as treatment for conditions that respond to CBD, such as epilepsy. Dry mouth and watery eyes are the only widely reported negative effects of Lemon Skunk, though paranoia, anxiety, and dizziness are also possible. Found up and down the West Coast, this strain is also popular in Colorado. It occasionally circulates on the black market, as well. Lemon Skunk performs well when used for daytime pain relief, especially in the case&nbsp;of chronic migraines, and&nbsp;is most often prescribed for this purpose. Those suffering from stress, anxiety, and depression favor this strain for its mood elevating properties. The strain is also used for the relief of nausea and eating disorders. Lemon Skunk is designed by DNA Genetics, who chose two different strains of skunk with a strong flavor and scent of lemons as its parents. The mother is a skunk that originated from Vegas, while the father came from Holland. The strain grows easily and is suitable to growers with any experience level. It thrives both indoors and out. Needing 55 to 65 days to finish, the strain can reportedly produce up to 600 grams per square meter. Outside, Lemon Skunk is usually ready for harvest in October in the Northern Hemisphere and in April in the Southern. <strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Creative <strong>Medical Benefits –&nbsp;</strong>Depression,&nbsp;Fatigue,&nbsp;Stress,&nbsp;Pain,&nbsp;Insomnia <strong>Flavours –&nbsp;</strong>Lemon,&nbsp;Skunk,&nbsp;Citrus</p>
        </div>`,
        price:44.00,
        category:"HYBRID",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 44,
            },
            {
                name: "14 Grams",
                price: 114,
            },
            {
                name: "28 Grams",
                price: 213,
            }
        ]
    },
    {
        name:"White Widow",
        image:"./downloaded-images2/FLOWERS/HYBRID/White-Widow.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>White Widow Strain</strong>&nbsp;is a hybrid strain that many have been familiar with since the early 90’s. This strain has global popularity and can easily be found atop a menu at almost any Amsterdam coffee shop. The prevalence of&nbsp;<em>White Widow</em>&nbsp;has greatly increased due to the television show Weeds and references within the rap industry. This strain holds a pretty balanced 60:40 sativa/indica ratio ( Brazil Sativa x South Indian Indica) that leads one to a cognitive driven high with a relaxing undertone.</p>
        <p>Patients will opt for the&nbsp;<em>White Widow strain</em>&nbsp;if they’re seeking a strain that allows them to unwind and relax while still maintaining a sense of mental awareness. This strain is especially good for depression, stress, pain, and PTSD. White Widow gets its name from the fact that it is literally blanketed in white crystals. Beware though, this sweet sugary smoke starts out light but expands dramatically which can lead to heavy coughing; especially if you’re a novice smoker. When it comes to smell, you can expect a citrus and peppery scent that is accompanied by a lemony aftertaste. This strain is perfect for outdoor activities like hanging out at the beach or taking a nice walk.</p>
        <p>White Widow can be grown from seed or from clone (achieved by planting clippings of mature and healthy plants). It is a mold-resistant strain, making outdoor cultivation an option — although an almost Mediterranean climate with constant temperatures between 70 and 80 degrees Fahrenheit works best. Despite a mostly sativa high, White Widow look much more indica during the vegetative stage: plants are bushy and wide, and rarely exceed 6 feet in height. The plants flower within 9 weeks when grown indoors and are ready for harvest in early October when grown outdoors. Growers can expect about 37 to 55 grams (or about 1.3 to 2 ounces) per square foot of plant.</p>
        <p>&nbsp;</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Relaxed,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Energetic</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Lack of Appetite,&nbsp;Fatigue</p>
        <p><strong>Flavours –&nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        </div>`,
        price:50.00,
        category:"HYBRID",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 199,
            }
        ]
    },
    {
        name:"Grape  Ape",
        image:"./downloaded-images2/FLOWERS/INDICA/1427-BLG-510x510-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Grape Ape</strong>&nbsp;is a tasty, memorable strain with strong indica roots. Its distinctive look and complex fruity flavor makes it an easy favorite — to say nothing of its incredibly potent body high. Grape Ape is the product of strains as different as Mendocino Purps, an award-winning Northern California crossbreed, the influential staple strain Skunk, and a legendary Afghani landrace. The combination of these nuances has yielded a bold and visually striking variety.</p>
        <p>There are different varieties of Grape Ape, with seeds available from Washington State-based Apothecary Genetics and Barney’s Farm, the seed bank responsible for creating other taste-focused strains like&nbsp;LSD&nbsp;and&nbsp;Pineapple Chunk. Testing lab Analytical 360 has tested samples of&nbsp;<strong>Grape Ape</strong>&nbsp;at between 15% and 25% THC composition.</p>
        <p>Grape Ape is marked by standout colors and multi-layered scents — this is strain with more consumer “bag appeal” than most. Buds are large and have a dense bud structure with tightly-curled leaves. The leaves themselves are a deep green, with certain phenotypes expressing shades of purple and even red, with copper-colored pistils throughout. Trichome count varies from moderate to high, leaving the flowers especially sticky. The multicolored leaves are also very pungent: a candy-like grape smell wafts from the chunky buds. Breaking open the sticky flowers with a grinder gives off a different odor, with some skunky musk from the Skunk #1 parent and more of a thick hash scent from Afghani. When inhaled though, the slightly harsh smoke from Grape Ape tastes more fruity than skunky — notes of grape and berries predominate, leaving behind a sweet sensation at the top of the palate.</p>
        <p>This strain has a high that mounts slowly, eventually leading to a very weighty sensation in the head and limbs. Because of its slow onset, those enjoying Grape Ape should consume cautiously, keeping in mind that a little of this strain can go a long way. In ideal conditions, Grape Ape provides a palpable sense of both mental and physical relaxation, easing users into a spacey calmness. Rather than stimulating rapid-fire thoughts, Grape Ape offers a full body stone. Like the similarly simian-named hybrid&nbsp;Gorilla Glue, Grape Ape may leave you feeling like a clumsy, sleepy primate. Its indica strength makes Grape Ape a helpful strain for those suffering from nagging pain, whether due to temporary aches or more chronic conditions like fibromyalgia. It can also soothe sore muscles after strenuous exercise. Mentally, this strain can melt stress and anxiety with the force of its foggy high. Definitely an after-dark strain, making it great for inducing sleep.</p>
        <p><strong>Flavours:&nbsp;</strong>Grape,&nbsp;Sweet,&nbsp;Earthy</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Sleepy,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Insomnia,&nbsp;Stress,&nbsp;Pain,&nbsp;Depression,&nbsp;Lack of Appetite</p>
        <p>&nbsp;</p>
        </div>`,
        price:55.00,
        category:"INDICA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 55,
            },
            {
                name: "14 Grams",
                price: 110,
            },
            {
                name: "28 Grams",
                price: 200,
            }
        ]
    },
    {
        name:"Afghan   Kush",
        image:"./downloaded-images2/FLOWERS/INDICA/Afghan-Kush-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Afghan Kush</strong>&nbsp;has&nbsp;roots that trace back to the&nbsp;<strong>Hindu Kush</strong>&nbsp;mountain range near the Afghanistan-Pakistan border. There&nbsp;its genotype has been perfected over centuries,&nbsp;making&nbsp;it the ultimate source for&nbsp;<strong>hash</strong>&nbsp;such as charas and the sticky&nbsp;<strong>black Afghani hash</strong>. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this&nbsp;<strong>strain</strong>&nbsp;available for everyone to grow. The buds of this strain&nbsp;develop into massive, blunt-topped nuggets full of resin; pure&nbsp;<strong>indica</strong>&nbsp;goodness with a heavy yield. Revered for its heavy resin content and powerfully sedating effects,<strong>&nbsp;Afghan Kush</strong>&nbsp;is a top choice for anyone looking to relax after a long day.</p>
        <p>Due to the heavy Indica effects,&nbsp;it is most often used by insomniacs as a&nbsp;night time medication.&nbsp;It is also used to help people cope with&nbsp;stress and anxiety. People with eating disorders, such as anorexia, use it because of its effect on appetite. Thanks to its heavy body high, it is an ideal&nbsp;strain for pain relief,&nbsp;bringing relaxation to users with chronic pain.</p>
        <p>Traditionally, the strain was harvested&nbsp;to produce a very potent hashish –&nbsp;the quality the strain retained. Due to the sturdy nature of this wild strain, it is recommended for amateur growers. Afghan Kush’s unusually high THC content can make up for the lower yields beginners might harvest. It is fairly resistant to disease and molds (another big plus for beginners). Because of its natural hardiness, Afghan Kush can be grown both indoors and out. The strain flowers for seven to eight weeks and is ready for harvest in October when grown outside. Being an Indica, short Afghan Kush plants grow wide, filling out rather than up. A well-grown plant can yield 400 grams per square meter inside or between 500 to 600 grams outside.</p>
        <p><strong>Flavours:</strong>&nbsp;Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Sleepy,&nbsp;Happy,&nbsp;Hungry</p>
        <p><strong>Medical Uses:</strong>&nbsp;Stress,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Depression,&nbsp;Headaches</p>
        <p>&nbsp;</p>
        <p>For more information about this strain click&nbsp;<a href="https://www.leafly.com/strains/afghan-kush" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>`,
        price:65.00,
        category:"INDICA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 65,
            },
            {
                name: "14 Grams",
                price: 120,
            },
            {
                name: "28 Grams",
                price: 220,
            }
        ]
    },
    {
        name:"Critical Mass (14 Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/critical-mass-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Critical Mass</strong>&nbsp;is a combination of&nbsp;Afghani&nbsp;and&nbsp;Skunk&nbsp;#1&nbsp;that originated from the breeder Mr. Nice Seed Bank. With a large “mass” of production, branches tend to snap from the weight of these dense buds. Flowering time is approximately 6-8 weeks, with a heavy leaf to flower ratio. However, due to the large production of flowering, this&nbsp;strain&nbsp;is susceptible to mold which can be reduced by growing indoors to reduce humidity. THC levels of this strain may reach 19-22%.</p>
        <p>This strain is most often reserved for evening or night-time use due to its sedating effect. For the same reason, it’s good for insomniacs seeking a full night’s rest. Critical Mass Indica body high may ease most chronic aches and pains as well as relieve stress and anxiety. Others choose this strain for migraines, nausea, and anorexia. The effects usually last between 2-2.5 hours, depending on the dose. Some users find this strain thought-provoking and nearly psychedelic. As nearly all strains with high THC content, this strain when consumed in higher quantities can produce dry mouth and eyes as well as some paranoia and anxiety.</p>
        <p>Critical Mass is Mr. Nice’s rework of an older set of genetics called Big Bud. The intention behind the rework was to create a stable strain with a massive yield and a very desirable high. It is a cross between a landrace Afghani Indica and&nbsp;Skunk #1. Despite being susceptible to molds and requiring support to grow properly, it is recommended to novice growers because of its yield and ability to grow indoors or out. Reported yields of up to 6 pounds make this strain ideal for cash-crop growers. The strain flowers between 6 and 8 weeks, and it grows well in the Sea of Green setup.</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;&nbsp;</strong>Earthy,&nbsp;Sweet,&nbsp;Woody</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Sleepy,&nbsp;Euphoric,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Stress,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Depression,&nbsp;Inflammation</p>
        <p>&nbsp;</p>
        </div>`,
        price:160.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"Jedi   Kush",
        image:"./downloaded-images2/FLOWERS/INDICA/Jedi-Kush-2-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Cali Connection’s&nbsp;<strong>Jedi Kush Strain</strong>&nbsp;brings together the forces of&nbsp;Death Star&nbsp;and&nbsp;SFV OG&nbsp;Kush, an&nbsp;indica&nbsp;alliance that will awaken both mind and body. Jedi Kush’s timid aroma isn’t fully realized until a bud is cracked open, releasing a complex fusion of sour&nbsp;skunk&nbsp;and tangy&nbsp;diesel. Dreamy&nbsp;euphoria&nbsp;blankets the mind, a sensation that builds over time into bolting cerebral&nbsp;energy&nbsp;that’s unexpected from our&nbsp;indicas. This lethargy-free strain is a great way for patients to get a powerful dose of&nbsp;cannabinoids&nbsp;during the day while treating ailments like&nbsp;pain,&nbsp;PTSD,&nbsp;depression,&nbsp;stress,&nbsp;headaches, and&nbsp;appetite loss. Jedi plants&nbsp;show resilience in outdoor gardens but also thrive indoors with a flowering time of 8 to 9 weeks.</p>
        <p dir="ltr">When properly cured, flowers of Jedi Kush carry the prominent scent of diesel fumes — this aroma was likely passed on from parent strain Death Star, which has Sour Diesel in its background. On closer inspection, the buds also have a damp, earthy scent, somewhat like of moist soil after a rainstorm. Grinding up or breaking open these buds yields sharp, skunky notes. When combusted, Jedi Kush burns with a harsh, acrid smoke that may sting the palate and sinuses, causing coughing and watery eyes. Those looking to keep their consumption discreet may want to take a few precautions, as this strain can be a particularly pungent smoke.</p>
        <p dir="ltr">Jedi Kush offers a slow, creeping high. It may be several minutes after smokers have enjoyed its complex flavor combination before they begin to feel a gradual warping of their sensory perception. Sights and sounds may take on a new dimension; users also describe a powerful sense of time dilation. Once consumers acclimate, though, they can point this high in any direction they might want. It can inspire creativity as well as deep analysis for work on problem-oriented tasks. Alternatively, Jedi Kush can be great for spacing out and daydreaming while enjoying one’s surroundings. In addition to these cerebral vibes, a slight, tingling body high leaves smokers with newfound energy and motivation — this combination of mental and physical effects is great for activities that involve both, like exercise, dancing, and even sex. Although it’s largely not sleepy, increasing dosage can eventually bring about couchlock. Jedi</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Sleepy,&nbsp;Happy,&nbsp;Uplifted,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Pain,&nbsp;Depression,&nbsp;Stress,&nbsp;Headaches,&nbsp;Muscle Spasms</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Flowery</p>
        <p>&nbsp;</p>
        </div>`,
        price:55.00,
        category:"INDICA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 55,
            },
            {
                name: "14 Grams",
                price: 110,
            },
            {
                name: "28 Grams",
                price: 215,
            }
        ]
    },
    {
        name:"Pineapple Express  (28 Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/media2F5e16375a63edd23f37fc74112Fproducts2F24998512142043D3D3D3DPineapple-Express-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Pineapple Express strain</strong>&nbsp;has thick and lumpy buds that show off the strain’s hybridized genetics: they are densely packed like indica flowers, but have the long and tapered shape characteristic of many sativa varieties. The deep green leaves are sometimes tinged with shades of red (the result of pigments activated by cold weather during the grow process) and are accented by deep orange to red pistils. This is a very resinous strain, and the sticky flowers can be very hard to break up without a grinder; the residue left behind may be difficult to clean off of surface and fingertips. The predominant smell of&nbsp;<strong>Pineapple Express</strong>&nbsp;flowers is, unsurprisingly, pineapple — but there are other, less tropical scents present like a hint of musk and some dank earthiness.</p>
        <p>When inhaled, the smooth smoke from this strain tastes earthy and a little bit piney. On the exhale, users will detect a sugary sweetness that lingers in the mouth, although not unpleasantly.</p>
        <p><strong>Pineapple Express</strong>&nbsp;offers what can be described as a creeper of a high — smokers may have long since finished savoring the smoke’s unique taste before they notice the effects. They begin in the head, with a change in perception. Many have reported some initial psychedelic distortions like a sharpened focus on colors and sounds. As such,&nbsp;<em>Pineapple Express</em>&nbsp;can be a great strain to accompany a scenic walk. This alert head high is soon accompanied by a tingling relaxation in the extremities that helps users feel at ease, whatever their surroundings. The combination of cerebral focus and mellow relaxation makes Pineapple Express a versatile strain, good for chatty get-togethers or getting through a to-do list. Medically, this strain’s feeling of mental calm can be very effective in treating mood and anxiety disorders, helping patients to be more fully present and energetic. And although this strain isn’t as good as some more indica-dominant hybrids in treating physical pain, its head high can actually be useful in distraction users from the acute perception of chronic pain. The high from Pineapple Express is said to last longer than usual, providing a more economically efficient high for many consumers.</p>
        <p>&nbsp;</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Energetic</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Fatigue,&nbsp;Headaches</p>
        <p><strong>Flavours –&nbsp;</strong>Pineapple,&nbsp;Sweet,&nbsp;Tropical</p>
        <p>&nbsp;</p>
        </div>`,
        price:325.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"MK Ultra  (28 Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/MK-Ultra-(1).jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">Named after the methods of mental manipulation employed by the CIA’s Project MKUltra, this indica-dominant strain stands apart due to its powerful cerebral effects. A cross between&nbsp;mostly-sativa hybrid&nbsp;OG Kush&nbsp;and indica&nbsp;G-13, this strain is bred by T.H.&nbsp;Seeds and won 1st place Indica at theHigh Times Cannabis Cup in 2003 and 2nd place in 2004. Indoor growing is facilitated by the plant’s short stature, and its above yield delivers particular sticky, dense, pungent flowers. MK Ultra is renowned for its ‘hypnotic’ effects that are fast-acting and best used when strong medication is desired. As evidenced by its collection of awards, this indica is one of the strongest in the world. It may be best for a day when not getting off the couch would be fine.&nbsp;</header>
        <header>MK Ultra plants are short, reaching heights of 100 – 120cm. It has sticky, dense and pungent flowers with tight, resin coated buds which are extremely sticky and almost white. Its scent is a bit strange – it resembles burnt plastic mixed with lemon and diesel. However, there is nothing strange about its taste – a long lasting piney, earthy sweet with a hint of mustiness. The smoke of this strain is very smooth. This powerful strain is considered to be one of the most powerful Indicas in the world. Its hypnotic cerebral effects hit almost immediately. Smoking this strain causes the eyelids to become very heavy and droop, thus making MK Ultra perfect for patients suffering from insomnia. It induces a heavy couch lock, which makes it suitable to combat stress as well.Upon use, users often demonstrate signs of giddiness, with an ever-present smile on their faces. Thus, depression can also be cured with the help of this exceptional strain.</header>
        <div class="description-wrapper">
        <div class="description">
        <p>&nbsp;</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>: &nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Euphoric,&nbsp;Relaxed,&nbsp;Happy,&nbsp;Hungry,&nbsp;Sleepy</p>
        <p><strong>Medical Uses:</strong>&nbsp;Pain,&nbsp;Insomnia,&nbsp;Stress,&nbsp;Nausea,&nbsp;Depression</p>
        </div>
        </div>
        <p>&nbsp;</p>
        </div>`,
        price:300.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"MK Ultra (7  Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/MK-Ultra-.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">Named after the methods of mental manipulation employed by the CIA’s Project MKUltra, this indica-dominant strain stands apart due to its powerful cerebral effects. A cross between&nbsp;mostly-sativa hybrid&nbsp;OG Kush&nbsp;and indica&nbsp;G-13, this strain is bred by T.H.&nbsp;Seeds and won 1st place Indica at theHigh Times Cannabis Cup in 2003 and 2nd place in 2004. Indoor growing is facilitated by the plant’s short stature, and its above yield delivers particular sticky, dense, pungent flowers. MK Ultra is renowned for its ‘hypnotic’ effects that are fast-acting and best used when strong medication is desired. As evidenced by its collection of awards, this indica is one of the strongest in the world. It may be best for a day when not getting off the couch would be fine.&nbsp;</header>
        <header>MK Ultra plants are short, reaching heights of 100 – 120cm. It has sticky, dense and pungent flowers with tight, resin coated buds which are extremely sticky and almost white. Its scent is a bit strange – it resembles burnt plastic mixed with lemon and diesel. However, there is nothing strange about its taste – a long lasting piney, earthy sweet with a hint of mustiness. The smoke of this strain is very smooth.This powerful strain is considered to be one of the most powerful Indicas in the world. Its hypnotic cerebral effects hit almost immediately. Smoking this strain causes the eyelids to become very heavy and droop, thus making MK Ultra perfect for patients suffering from insomnia. It induces a heavy couch lock, which makes it suitable to combat stress as well.Upon use, users often demonstrate signs of giddiness, with an ever-present smile on their faces. Thus, depression can also be cured with the help of this exceptional strain.</header>
        <div class="description-wrapper">
        <div class="description">
        <p>&nbsp;</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>: &nbsp;</strong>Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Euphoric,&nbsp;Relaxed,&nbsp;Happy,&nbsp;Hungry,&nbsp;Sleepy</p>
        <p><strong>Medical Uses:</strong>&nbsp;Pain,&nbsp;Insomnia,&nbsp;Stress,&nbsp;Nausea,&nbsp;Depression</p>
        </div>
        </div>
        <p>&nbsp;</p>
        </div>`,
        price:95.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"Afghan Kush  (28 Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/Nuken-4-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Afghan Kush</strong>&nbsp;has&nbsp;roots that trace back to the&nbsp;<strong>Hindu Kush</strong>&nbsp;mountain range near the Afghanistan-Pakistan border. There&nbsp;its genotype has been perfected over centuries,&nbsp;making&nbsp;it the ultimate source for&nbsp;<strong>hash</strong>&nbsp;such as charas and the sticky&nbsp;<strong>black Afghani hash</strong>. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this&nbsp;<strong>strain</strong>&nbsp;available for everyone to grow. The buds of this strain&nbsp;develop into massive, blunt-topped nuggets full of resin; pure&nbsp;<strong>indica</strong>&nbsp;goodness with a heavy yield. Revered for its heavy resin content and powerfully sedating effects,<strong>&nbsp;Afghan Kush</strong>&nbsp;is a top choice for anyone looking to relax after a long day.</p>
        <p>Due to the heavy Indica effects,&nbsp;it is most often used by insomniacs as a&nbsp;night time medication.&nbsp;It is also used to help people cope with&nbsp;stress and anxiety. People with eating disorders, such as anorexia, use it because of its effect on appetite. Thanks to its heavy body high, it is an ideal&nbsp;strain for pain relief,&nbsp;bringing relaxation to users with chronic pain.</p>
        <p>Traditionally, the strain was harvested&nbsp; to produce a very potent hashish –&nbsp;the quality the strain retained. Due to the sturdy nature of this wild strain, it is recommended for amateur growers. Afghan Kush’s unusually high THC content can make up for the lower yields beginners might harvest. It is fairly resistant to disease and molds (another big plus for beginners). Because of its natural hardiness, Afghan Kush can be grown both indoors and out. The strain flowers for seven to eight weeks and is ready for harvest in October when grown outside. Being an Indica, short Afghan Kush plants grow wide, filling out rather than up. A well-grown plant can yield 400 grams per square meter inside or between 500 to 600 grams outside.</p>
        <p><strong>Flavours:</strong>&nbsp;&nbsp;Earthy,&nbsp;Woody,&nbsp;Pungent</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Sleepy,&nbsp;Happy,&nbsp;Hungry</p>
        <p><strong>Medical Uses:</strong>&nbsp;Stress,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Depression,&nbsp;Headaches</p>
        </div>`,
        price:300.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"OG  Kush",
        image:"./downloaded-images2/FLOWERS/INDICA/OG-kush-1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the most notable strains in North America,&nbsp;<strong>OG Kush</strong>&nbsp;embodies the epitome of Californian cannabis. It has become one of the top strains to crossbreed, because of its proven quality and potency. OG Kush is a cross between&nbsp;Chemdawg&nbsp;and Hindu Kush. Chemdawg is a straight-to-the-brain hybrid, while Hindu Kush is a heavy&nbsp;Indica. These two strains would make OG Kush a perfect blend for any cannabis user.</p>
        <p>The buds are covered in trichomes that lend them a silvery-white appearance and make them very sticky to the touch — when prepping buds for a joint or a pipe, users may want to use a grinder. When properly cured, the buds have a earthy, musty scent that is accented by some citrusy brightness: the overall impression is of a hoppy craft beer. Burning or breaking open the buds offers more of a pine-like odor. Smoke from OG Kush is commonly harsh and cough-inducing; it may sting the sinuses and cause eyes to water. The smoke tastes hashy and spicy like a classic indica on the inhale and exhale. OG Kush’s pungent funk may linger for a while after a joint has been extinguished — those looking to remain discreet about their smoking should take the proper precautions.</p>
        <p>The high from OG Kush is more head-focused than physical. It starts with a sudden headrush that may lead users to feel more focused on their surroundings; sounds and colors may seem intensified. This alteration of the senses may soon give way to a general uplift in mood that progresses towards euphoria. The increase in focus is not as cerebral as with more pure sativas — smokers will not suffer from a disorienting sense of rapid thought association or “mindrace.” &nbsp;It’s a versatile smoke that lends itself to the user’s mood and mindset The combination of mental stimulation and improvement in mood makes this a uniquely social strain, good for parties and lively conversations. It’s also a great way to enhance activities that involve the body and mind, like video games, exercise, and even sex. OG Kush has medical application as a means to temporarily relieve anxiety and depression by helping users live in the moment. Its sense of focus can also be helpful for those suffering from attention deficit disorders. Some have reported relief from headaches and migraines with this strain as well. As with many sativa varieties, OG Kush has the potential to make users feel paranoid with higher doses.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;</strong>Earthy,&nbsp;Pine,&nbsp;Woody</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Sleepy</p>
        <p><strong>Medical</strong>&nbsp;<strong>Uses:&nbsp;</strong>Stress,&nbsp;Pain,&nbsp;Depression,&nbsp;Insomnia,&nbsp;Headaches</p>
        </div>`,
        price:50.00,
        category:"INDICA",
        countInStock: 30,
        options : [
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 199,
            }
        ]
    },
    {
        name:"Wedding Cake (14 Grams)",
        image:"./downloaded-images2/FLOWERS/INDICA/Wedding-Cake-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Wedding Cake</strong>&nbsp;is a&nbsp;hybrid&nbsp;with indica-dominance. It is attained by crossing triangle cookies x animal mints. It gives an exceptionally sweet aromatic essence and a fruity flavour. The taste is a perfect combination of sweetness of&nbsp;cookies&nbsp;and fruitiness of a cherry pie. It works as a calming agent and appetite stimulator, and is quite helpful for patients who experience regular depression-associated syndromes, fibromyalgia, MS and other such related symptoms. It may act as a sedative for patients, but does help in calming down nerves or controlling anxiety stimulating symptoms. Although it might not completely hamper your focus and energy levels, it will cause the usual drying out of eyes and mouth.&nbsp;<em>Wedding Cake</em>&nbsp;particular&nbsp;medical marijuana&nbsp;is grown indoors. It is observed to contain a THC level of 14-18% and a CBD level of 0.23%. In terms of physical features, it is shaped like pine trees and looks dense in its structural form. It is quite frosty looking and has dark green leaves. This particular medical marijuana is also thickly dressed up with orange hair all over it. It is most generally known for its sugary taste, as well as high potency value.</p>
        <p>This strain’s high starts relatively quickly, taking hold primarily in the head. Users may find their thoughts to be more fast-paced or intense, and may perceive their surroundings more acutely. In the right set and setting, this change in thinking is accompanied by feelings of giddiness or euphoria. Less than an hour into the high, Wedding Cake’s indica side kicks in. Smokers might feel increased warmth and a pleasant heaviness that spreads through the spine and limbs. Even in the midst of this sedation, though, cerebral stimulation continues, allowing users to feel uniquely “tuned in” to their surroundings. This holistic combination of mental and physical effects lends itself to complex activities like creating art, exercising, and even sex. As the high progresses, so does this strain’s body high — after a few bowls, smokers may find themselves couchlocked.</p>
        <p>Wedding Cake may also be of use to medical cannabis patients. Its tendency to bring about feelings of perceptiveness can aid those with mild to moderate stress, anxiety, and depression, helping them feel more “in the moment.” Because this strain leaves users lucid and levelheaded, it can also help those with attention deficit disorders to focus on specific tasks. Wedding Cake’s gradual waves of physical relaxation can soothe both temporary and chronic aches and pains and, in high enough doses, can bring about relief for insomnia. Finally, it can be a potent appetite stimulant for those who have lost their hunger to disease, medication, or chemotherapy.</p>
        <p><strong>Effects:&nbsp;</strong>Relaxed,&nbsp;Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Hungry</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Pain,&nbsp;Insomnia,&nbsp;Lack of Appetite</p>
        <p><strong>Flavours:&nbsp;</strong>Sweet,&nbsp;Earthy,&nbsp;Vanilla</p>
        </div>`,
        price:162.00,
        category:"INDICA",
        countInStock: 30,
    },
    {
        name:"White  Russian",
        image:"./downloaded-images2/FLOWERS/INDICA/white-russian-3-247x247-1(1).jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>White Russian</strong>&nbsp;is a indica dominant strain which comes from the cross of two legendary strains, white widow and AK-47. This strain won the best overall in 1996 at the high times cannabis cup. This flower is known to leave you stuck on the couch if you over consume.&nbsp;The high from this strain takes hold almost immediately in the form of some initial disorientation and tightening around the temples. Users report feeling quickly energized and motivated, and being able to function with more clarity than confusion. As is characteristic of parent strain White Widow, White Russian has an intensely cerebral high that can lend itself to introspection, lateral thinking for problem solving, and creative inspiration. A sense of euphoria and emotional well-being can accompany this mental stimulation. Despite some indica in its genetics, this strain carries very little physical effects — although, as with any variety of cannabis, heavy consumption can lead to couch lock and drowsiness. White Russian’s powerful head high makes it effective in treating anxiety and depression. It is also particularly beneficial for users with attention deficit disorders. Red, dry eyes are a common side effect, a result of the high THC in this strain dilating blood vessels and capillaries controlling blood flow to the eyes. Because of its cerebral intensity, White Russian also has the potential to veer into paranoid or anxious territory; users should consider their individual tolerance as well as their mindset and setting before enjoying this strain. More likely to leave you wired than lazy, White Russian is definitely a strain to be enjoyed during the daytime.</p>
        <p>Plants of White Russian may be user-friendly for even novices to grow; the strain’s hearty genetics mean that it is more resistant to adverse growing conditions and not as high-maintenance as many other strains. That said, growing this variety outdoors requires a consistently warm temperature and a direct albeit not overpowering source of sunlight. Plants are relatively short and bushy for a sativa-dominant variety, reaching between 3 and 4 feet tall when grown indoors. Plants also have a low leaf-to-flower ratio, meaning that cultivators won’t need to worry as much about trimming fan leaves during the vegetative state. Grown indoors, plants flower after 8 to 9 weeks. Outdoors, plants are ready for harvest in mid to late October.</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Relaxed,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Energetic</p>
        <p><strong>Medical Benefits:</strong>&nbsp;Anxiety,&nbsp;Pain,&nbsp;Nausea,&nbsp;Depression,&nbsp;Headaches</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Earthy,&nbsp;Fruity,&nbsp;Spicy</p>
        <p>&nbsp;</p>
        </div>`,
        price:54.00,
        category:"INDICA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 54,
            },
            {
                name: "14 Grams",
                price: 114,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ]
    },
    {
        name:"Sour Diesel",
        image:"./downloaded-images2/FLOWERS/SATIVA/Sour-Diesel-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>The&nbsp;<strong>Sour Diesel Strain</strong>, sometimes called Sour D, is an invigorating sativa-dominant strain&nbsp;named after its&nbsp;pungent,&nbsp;diesel-like aroma. This fast-acting strain delivers&nbsp;energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.&nbsp;Stress,&nbsp;pain, and&nbsp;depression&nbsp;fade away in long-lasting relief that makes&nbsp;<em>Sour Diesel</em>&nbsp;a top choice among medical patients. This strain&nbsp;took root in the early 90’s, and it is believed to have descended from&nbsp;Chemdawg 91&nbsp;and&nbsp;Super Skunk.</p>
        <p><strong>Sour Diesel</strong>&nbsp;has round, medium-sized buds with leaves that appear yellowish-green. Red hairs called pistils, structures that operate to catch pollen from male plants, contrast with the densely-packed leaves. When properly cured, the flowers are somewhat sticky — the dusting of trichomes is not as immediately obvious as it is on more resinous strains like&nbsp;White Widow. Nevertheless, breaking open buds reveals trichomes coating the insides of the dense flowers. The buds have an overpowering smell that, true to this strain’s name, is very similar to gasoline. The odor also has some hints of orange. Breaking open or grinding the buds intensifies this scent, and adds components of musk and pine sap. Sour Diesel has a notoriously harsh, acrid smoke that can cause users to cough or make their sinuses water. The smoke has a sour and vaguely skunky taste that may describe as unpleasant; on the exhale, the diesel and almost ammonia-like tang stings the palate and may linger for a long time afterward. Smokers trying to remain discreet should be warned that this is a very pungent strain whose odor can carry for quite a distance.</p>
        <p>Sour Diesel has round, medium-sized buds with leaves that appear yellowish-green. Red hairs called pistils, structures that operate to catch pollen from male plants, contrast with the densely-packed leaves. When properly cured, the flowers are somewhat sticky — the dusting of trichomes is not as immediately obvious as it is on more resinous strains like&nbsp;White Widow. Nevertheless, breaking open buds reveals trichomes coating the insides of the dense flowers. The buds have an overpowering smell that, true to this strain’s name, is very similar to gasoline. The odor also has some hints of orange. Breaking open or grinding the buds intensifies this scent, and adds components of musk and pine sap. Sour Diesel has a notoriously harsh, acrid smoke that can cause users to cough or make their sinuses water. The smoke has a sour and vaguely skunky taste that many describe as unpleasant; on the exhale, the diesel’s almost ammonia-like tang stings the palate and may linger for a long time afterward. Smokers trying to remain discreet should be warned that this is a very pungent strain whose odor can carry for quite a distance.</p>
        <p>&nbsp;</p>
        <p><strong>Flavours:&nbsp;</strong>Citrus,&nbsp;Lemon,&nbsp;Earthy</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Energetic,&nbsp;Creative</p>
        <p><strong>Medical:&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Fatigue,&nbsp;Pain,&nbsp;Headaches</p>
        </div>`,
        price:50.00,
        category:"SATIVA",
        countInStock: 30,
        options : [
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 115,
            },
            {
                name: "28 Grams",
                price: 240,
            }
        ]
    },
    {
        name:"Purple Haze  (28 Grams)",
        image:"./downloaded-images2/FLOWERS/SATIVA/Purple-Haze-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <header class="heading--article">
        <section class="padding-listItem divider bottom">
        <div class="description-wrapper">
        <div class="description">
        <p>Popularized by&nbsp;Jimi Hendrix’s 1967 classic, Purple Haze delivers a dreamy burst of&nbsp;euphoria&nbsp;that brings veteran consumers back to their psychedelic heyday. This nostalgic&nbsp;sativa&nbsp;staple remains cherished for its&nbsp;high-energy&nbsp;cerebral stimulation that awakens&nbsp;creativity&nbsp;and blissful&nbsp;contentment&nbsp;throughout the day. Purple Haze is believed to have descended from parent strains&nbsp;Purple Thai&nbsp;and&nbsp;Haze, who pass on a mix of&nbsp;sweet&nbsp;and&nbsp;earthy&nbsp;flavors underscored by notes of&nbsp;berry&nbsp;and sharp&nbsp;spice. Following her 8 to 9 week flowering time, Purple Haze buds typically acquire vibrant hues of lavender that further justify the naming of this strain.</p>
        <p>When properly cured, flowers of Purple Haze give off a dank, musty scent. A second whiff reveals some tart, berry-tinged notes. Meanwhile, grinding up or picking apart these flowers releases an herbal aroma, familiar to fans of Haze. Purple Haze gives off a very smooth and easily ingested smoke when combusted in a pipe or a joint. The smoke tastes sweet and hashy on the exhale. Notably, despite its purple coloring, this strain has no discernible grape flavors; this is because the pigments that determine its color do not have a corresponding effect on its taste.</p>
        <p>Purple Haze tends to work its magic soon after users inhale its flavorful smoke. As with many other sativas, this strain goes right to the head, resulting in side effects like a slight pressure around the temples or a flushing in the cheeks. Once these odd sensations abate, though, users are granted access to a higher plane of thinking in which ideas jump around in free association in surprising new connections. Certain thoughts or ideas may strike the consumer as more interesting than they otherwise might — and might not seem particularly engaging to bystanders who aren’t under a similar influence. As such, Purple Haze can stimulate conversation in social settings with like-minded people, serving as an icebreaker even when used among new acquaintances. Those who aren’t overwhelmed by the cerebral energy that Purple Haze provides may also find them able to ease into a heavy workload, whether it’s open-ended and creative or consists of complicated analytical tasks. After some time passes, this strain’s physical side may creep in bit by bit. Rather than relaxing the user and undoing Purple Haze’s buzzy effects, though, this body high is stimulating and somewhat trippy. Smokers may feel a new connection to their body or a new groundedness. This eventual combination of physical and mental qualities makes this bud a great way to enjoy activities that involve both body and mind, like exercising or gaming. Under the right circumstances and with the right company, Purple Haze can even be an effective aphrodisiac. As the high tapers off after a few hours, you may feel your energy begin to dip — but even so, this strain isn’t likely to make you crash and isn’t recommended for consumption before bedtime.</p>
        <p><span style="font-size: 14.4px;"><b>Flavors</b></span><strong>:&nbsp;</strong>Spice,&nbsp;Earthy,&nbsp;Berry</p>
        <p><strong>Effects:&nbsp;</strong>Happy,&nbsp;Relaxed,&nbsp;Euphoric,&nbsp;Uplifted,&nbsp;Tingly</p>
        <p><strong>Medical Benefits:&nbsp;</strong>Pain,&nbsp;Stress,&nbsp;Lack of Appetite,&nbsp;Fatigue,&nbsp;Depression</p>
        <p>&nbsp;</p>
        </div>
        </div>
        </section>
        </header>
        </div>`,
        price:300.00,
        category:"SATIVA",
        countInStock: 30,
    },
    {
        name:"Green  Crack",
        image:"./downloaded-images2/FLOWERS/SATIVA/green-crack-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>A perennial favorite,&nbsp;<strong>Green Crack</strong>&nbsp;is a sativa-dominant hybrid that was bred by inbreeding Skunk #1. Green Crack is usually sativa-dominant, but there’s also a less popular indica-heavy version of the strain. Green Crack got its name from Snoop Dogg, though it’s also known as Green Cush or simply Cush among smokers who prefer not to reference cocaine. This highly addictive strain is massively potent, with top THC levels reaching 24%. It has a sativa/indica ratio of 65:35. The high is decidedly cerebral, with a big mood boost and a jolt of energy. This strain spurs creativity and helps patients get things done. It’s most effective in treating anxiety and depression, along with ADHD, PTSD, and migraines. Green Crack has a sweet flavor with tropical and citrus notes. The buds are dense and tight. Dry mouth occurs frequently, while dry eyes, dizziness, and paranoia, happen less often. It’s most common in the Pacific Northwester, California, Arizona, and Colorado. But it can be found almost anywhere else with relative ease. It’s one of the most popular strains on the black market for this reason.</p>
        <p>Despite mostly indica physical characteristics, Green Crack has a strong and buzzy sativa high.&nbsp;It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. It’s also an inspiring smoke — its sharp sense of focus can help users zero in on creative projects or can draw attention to the nuances in a piece of music or a movie. Green Crack can also have some slightly psychedelic effects, including visual distortions and, particularly, an odd sense of time dilation. Because it can leave users feeling uplifted and fairly wired, this strain isn’t recommended for use late at night. Because it doesn’t have many physically relaxing indica properties, Green Crack doesn’t have a wide range of medical benefits. However, its energizing effects can be great for freeing users from fatigue. Green Crack can also aid those suffering from anxiety and depression, helping them to live in the moment — although in large enough doses, the tendency towards recursive cerebral thinking can plunge some into panic or paranoia.</p>
        <p><strong>Effects:</strong>&nbsp;Energetic,&nbsp;Happy,&nbsp;Uplifted,&nbsp;Focused,&nbsp;Euphoric<strong>&nbsp;</strong></p>
        <p><strong>Medical Benefits:&nbsp;</strong>Stress,&nbsp;Depression,&nbsp;Fatigue,&nbsp;Pain,&nbsp;Headaches</p>
        <p><strong>Flavours:&nbsp;</strong>Citrus,&nbsp;Earthy,&nbsp;Sweet</p>
        </div>`,
        price:44.00,
        category:"SATIVA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 44,
            },
            {
                name: "14 Grams",
                price: 114,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ]
    },
    {
        name:"Blue   Dream",
        image:"./downloaded-images2/FLOWERS/SATIVA/Blue-Dream.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Blue Dream, a sativa-dominant&nbsp;hybrid originating in California, has achieved legendary status among West Coast strains. Crossing a&nbsp;Blueberry&nbsp;indica&nbsp;with the&nbsp;sativa&nbsp;Haze, it balances full-body&nbsp;relaxation&nbsp;with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which will&nbsp;ease you gently into a calm&nbsp;euphoria. Sometimes this strain will express more indica-like phenotypes with the look and feel, but the sativa-leaning variety remains most prevalent.</p>
        <p>With a&nbsp;sweet&nbsp;berry&nbsp;aroma redolent of its Blueberry parent, this strain delivers swift symptom relief without heavy sedative effects. This makes this a popular daytime medicine for patients treating&nbsp;pain,&nbsp;depression,&nbsp;nausea, and other ailments requiring a&nbsp;high THC strain.</p>
        <p>Blue Dream’s high is all the best parts of its parentage wrapped neatly into a flavor-packed, beautifully balanced package. It begins with a cerebral rush, bringing with it motivation and heightened focus, so enjoy this through any jam-packed schedule. As the high builds you fall into an ultra-relaxed state, leaving you feeling hazy and totally calm. This numbing sensation will find you pain-free and ready for any task.</p>
        <p>Continuing with the plethora of effects, users who suffer from anxiety disorders are not recommended to use this strain as it has a tendency to get ahead of you quickly and could definitely agitate pre-existing conditions. However, because it is super potent it does have extremely beneficial elements for patients who suffer from chronic fatigue, depression, and lack of appetite. As it is a stimulant at its core, it will undoubtedly lift your mood and get the body moving. It is also recommended for mild cases of muscle spasms and pains caused by injury or illness.</p>
        <p><strong>Effects –&nbsp;</strong>Happy,&nbsp;Uplifted,&nbsp;Euphoric,&nbsp;Relaxed,&nbsp;Creative</p>
        <p><strong>Medical Benefits –&nbsp;</strong>Depression,&nbsp;Stress,&nbsp;Fatigue,&nbsp;Pain,&nbsp;Insomnia</p>
        <p><strong>Flavours –&nbsp;</strong>Blueberry,&nbsp;Sweet,&nbsp;Berry</p>
        </div>`,
        price:50.00,
        category:"SATIVA",
        countInStock: 30,
        options :[
            {
                name: "7 Grams",
                price: 50,
            },
            {
                name: "14 Grams",
                price: 99,
            },
            {
                name: "28 Grams",
                price: 210,
            }
        ]
    },
    {
        name:"Room 920 Blue Moon Tea",
        image:"./downloaded-images2/MUSHROOM/blue-moon-tea-room-920-2-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Blue Moon Tea&nbsp;</strong>is infused with amazonian cubensis mushrooms. This package contains one serving and we suggest to steep the loose tea in 1 cup of hot water for 3-5 minutes. Consuming mushrooms in the form of tea can cause the effects of the shrooms to be more intense. We suggest users to consume with caution and be wary of their dosages.</p>
        <p><strong>Each Blue Moon Tea contains 1 Gram of Amazonian Cubensis</strong></p>
        <section id="section_875426294" class="section product-description">
        <div class="section-content relative">
        <div id="row-1195971662" class="row align-center">
        <div class="col medium-8 small-10 large-8">
        <div class="col-inner">
        <p><strong>Ingredients:</strong>&nbsp;Organic Ginger, Organic Lemongrass, Blue Pea Flowers, Amazonian Cubensis</p>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>`,
        price:17.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Golden Teacher Mushrooms",
        image:"./downloaded-images2/MUSHROOM/Golden-Teacher-Mushrooms-3-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Golden Teacher Mushrooms</strong>&nbsp;are a classic introduction to shroom world. They’ve been a staple for newbies and experienced users for decades. Golden Teacher mushrooms are the most popular strain out there, for their reliable trip and euphoric properties.</p>
        <p>It is an all-round excellent&nbsp;<strong>magic mushroom</strong>&nbsp;that won’t leave anything to be desired. Golden Teacher mushrooms are very potent mushrooms and can give you a very strong trip. The Golden Teacher gives you a more intense trip than, for example, the Colombian and the Ecuadorian. The Golden Teacher is the largest kind of mushroom in the collection. They have caps that can reach five centimetres in diameter. It is also quite suitable for beginners. You just have to give this golden shroom a try.</p>
        </div>`,
        price:65.00,
        category:"MUSHROOM",
        countInStock: 30,
        options :[
            {
                name: "3.5 Grams",
                price: 35,
            },
            {
                name: "7 Grams",
                price: 65,
            },
            {
                name: "14 Grams",
                price: 12,
            },
            {
                name: "28 Grams",
                price: 230,
            }
        ]
    },
    {
        name:"Mexican Cubensis",
        image:"./downloaded-images2/MUSHROOM/mexican-cubensis-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mexican Cubensis</strong>&nbsp;Magic Mushrooms have been around for a long time, over 2000 years ago they were used by the Aztecs. These&nbsp;<strong>magic mushrooms</strong>&nbsp;offer users a mild experience, making it great for beginners. The effects given from Mexican Cubensis include happiness and euphoria that will take over your body and mind. Except a boost of creativity which will flow through your mind giving you psychedelic imaginations.&nbsp;You’ll get visuals hallucinations, both with opened and closed eyes: shapes colours variations, as well as fractals and forms.</p>
        <p>Everyone’s physiology and metabolism is different, and individual brain chemistry and body size play a significant role in how each individual might respond to psilocybin, as will your surroundings and emotional state, so if it is your first time or you are significantly upping your dosage, select a safe, comfortable, and if possible, familiar place, and consider asking a sober trip sitter to be your companion for the coming ride.</p>
        <p>At doses over 2 grams, some users report experiencing warping of the visual field, and Dali-esque melting objects. Other possible effects include time distortion, hallucinations both when eyes are closed or open and synesthesia (i.e. “seeing” sounds and “feeling” colours), particularly with the Transkei variety of cubensis, which also tends to have a heavier body load. Remember to stay hydrated, especially if you’re outdoors or doing an activity like dancing. Try sipping some honey ginger tea to counteract any possible nausea during the come-up.</p>
        <p><strong>Dosage Guide:</strong></p>
        <p>Mild Experience: 1 Gram to 1.5 Grams</p>
        <p>Medium Experience: 2 Grams to 3 Grams</p>
        <p>Full Experience: 3.5 Grams to 5 Grams</p>
        </div>`,
        price:35.00,
        category:"MUSHROOM",
        countInStock: 30,
        options :[
            {
                name: "3.5 Grams",
                price: 35,
            },
            {
                name: "7 Grams",
                price: 65,
            },
            {
                name: "14 Grams",
                price: 12,
            },
            {
                name: "28 Grams",
                price: 230,
            }
        ]
    },
    {
        name:"AcMUSssories indicaack",
        image:"./downloaded-images2/MUSHROOM/mint-tea-room-920-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Mint Tea&nbsp;</strong>is infused with amazonian cubensis mushrooms. This package contains one serving and we suggest to steep the loose tea in 1 cup of hot water for 3-5 minutes. Consuming mushrooms in the form of tea can cause the effects of the shrooms to be more intense. We suggest users to consume with caution and be wary of their dosages.</p>
        <p><strong>Each Mint Tea contains 1 Gram of Amazonian Cubensis</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Organic Peppermint, Organic Spearmint, Amazonian Cubensis</p>
        </div>`,
        price:17.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Blue Raspberry Mushroom Jelly",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Blue-Raspberry-Jelly-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Blue Raspberry Mushroom Jelly</strong>&nbsp;is the one of the tastiest and easiest way to dose mushrooms! These&nbsp;<strong>Blue Raspberry</strong>&nbsp;<strong>Mushroom Jellies&nbsp;</strong>are made using Golden Teacher Mushrooms and contains 1 gram of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Room 920 lab tests and creates all of their products in Canada.</p>
        <p>This 1 gram jelly is easily segmented into 8 doses, or split further into 16 doses (recommended for beginners)</p>
        <p><strong>Ingredients:</strong>&nbsp;Psilocybin Mushroom Extract, Corn Syrup, Gelatin, Citric Acid, Natural &amp; Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnauba Wax.</p>
        </div>`,
        price:16.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Cherry Mushroom Jelly",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Cherry-Jelly-2-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Cherry Mushroom Jelly</strong>&nbsp;is the one of the tastiest and easiest way to dose mushrooms! These&nbsp;<strong>Cherry Mushroom Jellies&nbsp;</strong>are made using Golden Teacher Mushrooms and contains 1 gram of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Room 920 lab tests and creates all of their products in Canada.</p>
        <p>This 1 gram jelly is easily segmented into 8 doses, or split further into 16 doses (recommended for beginners)</p>
        <p><strong>Ingredients:</strong>&nbsp;Psilocybin Mushroom Extract, Corn Syrup, Gelatin, Citric Acid, Natural &amp; Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnauba Wax.</p>
        </div>`,
        price:16.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Milk Chocolate Orange Square",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Dark-Chocolate-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Milk Chocolate Orange Square&nbsp;</strong>is the one of the tastiest and easiest way to dose mushrooms! This<strong>&nbsp;Milk Chocolate Orange Square</strong>&nbsp;is<strong>&nbsp;</strong>made using Golden Teacher Mushrooms and contains 3 grams of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Each chocolate square can be easily segmented into 9 doses which contain .30mg of<em>&nbsp;Golden Teacher Mushrooms</em>&nbsp;each. Splitting the 9 doses further into 18 doses makes each dose .15mg of Golden Teacher Mushrooms which is recommend for beginners.Room 920 lab tests and creates all of their products in Canada.</p>
        <p><strong>This 3 gram chocolate square is easily segmented into 9 doses, or split further into 18 doses (recommended for beginners)</strong></p>
        <p><strong>Ingredients:</strong> Corn Syrup, Sugar, Golden Teacher Mushrooms, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax.</p>
        </div>`,
        price:36.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Dark Chocolate Mint Square",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Dark-Chocolate-Mint-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Dark Chocolate Mint Square&nbsp;</strong>is the one of the tastiest and easiest way to dose mushrooms! This<strong>&nbsp;Dark Chocolate Mint Square</strong>&nbsp;is<strong>&nbsp;</strong>made using Golden Teacher Mushrooms and contains 3 grams of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Each chocolate square can be easily segmented into 9 doses which contain .30mg of<em>&nbsp;Golden Teacher Mushrooms</em>&nbsp;each. Splitting the 9 doses further into 18 doses makes each dose .15mg of Golden Teacher Mushrooms which is recommend for beginners.Room 920 lab tests and creates all of their products in Canada.</p>
        <p><strong>This 3 gram chocolate square is easily segmented into 9 doses, or split further into 18 doses (recommended for beginners)</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Corn Syrup, Sugar, Golden Teacher Mushrooms, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax</p>
        </div>`,
        price:36.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Grape Mushroom Jelly",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Grape-Jelly-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Grape Mushroom Jelly</strong>&nbsp;is the one of the tastiest and easiest way to dose mushrooms! These&nbsp;<strong>Grape Mushroom Jellies&nbsp;</strong>are made using Golden Teacher Mushrooms and contains 1 gram of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Room 920 lab tests and creates all of their products in Canada.</p>
        <p>This 1 gram jelly is easily segmented into 8 doses, or split further into 16 doses (recommended for beginners)</p>
        <p><strong>Ingredients:</strong>&nbsp;Psilocybin Mushroom Extract, Corn Syrup, Gelatin, Citric Acid, Natural &amp; Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnauba Wax.</p>
        </div>`,
        price:16.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Milk Chocolate Square",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Milk-Chocolate-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Milk Chocolate Square&nbsp;</strong>is the one of the tastiest and easiest way to dose mushrooms! This<strong>&nbsp;Milk Chocolate Square</strong>&nbsp;is<strong>&nbsp;</strong>made using Golden Teacher Mushrooms and contains 3 grams of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Each chocolate square can be easily segmented into 9 doses which contain .30mg of<em>&nbsp;Golden Teacher Mushrooms</em>&nbsp;each. Room 920 Milk Chocolate Square can be split into 9 doses and further into 18 doses that makes each dose .15mg of Golden Teacher Mushrooms which is recommend for beginners. Room 920 lab tests and creates all of their products in Canada.</p>
        <p><strong>This 3 gram chocolate square is easily segmented into 9 doses, or split further into 18 doses (recommended for beginners)</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Corn Syrup, Sugar, Golden Teacher Mushrooms, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax</p>
        </div>`,
        price:36.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Room 920 Dark Chocolate Square",
        image:"./downloaded-images2/MUSHROOM/Room920-Golden-Teacher-Mushrooms-Milk-Chocolate-Orange-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Room 920 Dark Chocolate Square&nbsp;</strong>is the one of the tastiest and easiest way to dose mushrooms! This<strong>&nbsp;Dark Chocolate Square</strong>&nbsp;is<strong>&nbsp;</strong>made using Golden Teacher Mushrooms and contains 3 grams of the psychoactive compound in Golden Teachers, psilocybin.&nbsp;Each chocolate square can be easily segmented into 9 doses which contain .30mg of<em>&nbsp;Golden Teacher Mushrooms</em>&nbsp;each. Room 920 Dark Chocolate Square can be split into 9 doses and further into 18 doses that makes each dose .15mg of Golden Teacher Mushrooms which is recommend for beginners. Room 920 lab tests and creates all of their products in Canada.</p>
        <p><strong>This 3 gram chocolate square is easily segmented into 9 doses, or split further into 18 doses (recommended for beginners)</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Corn Syrup, Sugar, Golden Teacher Mushrooms, Gelatin, Citric Acid, Natural and Artificial Flavours, Pectin, Artificial Colours, Coconut Oil, Carnuba Wax</p>
        </div>`,
        price:36.00,
        category:"MUSHROOM",
        countInStock: 30,
    },
    {
        name:"Cannalife Full Spectrum 1000mg CBD Tincture",
        image:"./downloaded-images2/TINCTURES/CannaLife-CBD-Tincture-1000mg-full-spectrum-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Cannalife&nbsp;</strong><b>Full Spectrum CBD Tincture!&nbsp;</b>CBD&nbsp;Cannabidiol is one of the main active ingredients in Cannabis but does not have the intoxicating effect of THC.</p>
        <p><strong>CBD</strong>&nbsp;products may help inflammation, pain, anxiety, insomnia, psychosis, seizures, spasms and more&nbsp;without the feelings of lethargy or&nbsp;the “high” associated with THC.</p>
        <p>&nbsp;</p>
        <p><strong>Keep Tinctures Refrigerated&nbsp;</strong></p>
        <p><strong>Each order Includes One 30ml tincture containing 1000mg of CBD | Each Dropper is 1ml / 33.3mg CBD</strong></p>
        </div>`,
        price:125.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Cannalife CBD Tincture",
        image:"./downloaded-images2/TINCTURES/Cannalife-CBD-tincture-600x600-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Cannalife</strong>&nbsp;<strong>CBD Tincture!&nbsp;</strong>CBD Cannabidiol is one of the main active ingredients in Cannabis but does not have the intoxicating effect of&nbsp;<strong>THC</strong>.</p>
        <p><strong>CBD</strong>&nbsp;products may help inflammation, pain, anxiety, insomnia, psychosis, seizures, spasms and more&nbsp;without the feelings of lethargy or&nbsp;the “high” associated with THC.</p>
        <p>&nbsp;</p>
        <p><strong>Keep Tinctures Refrigerated&nbsp;</strong></p>
        <p><strong><b>Available in 32ml/360mg CBD and 10ml/120mg CBD</b></strong></p>
        </div>`,
        price:.30,
        category:"TINCTURES",
        countInStock: 30,
        options :[
            {
                name: "32ml/360mg CBD",
                price: 30,
            },
            {
                name: "10ml/120mg CBD",
                price: 100,
            },
        ]
    },
    {
        name:"Mota 450 mg CBD Tincture",
        image:"./downloaded-images2/TINCTURES/cbdtinc-300x300-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 450 mg CBD Tincture&nbsp;</strong>is perfect for those looking to medicate using CBD with higher dosages.&nbsp;<em>CBD</em>&nbsp;provides no psychoactive effects that you would find from THC. Anyone looking to alleviate pain, inflammation, arthritis, muscle spasms, insomnia, epilepsy and more should focus on adding CBD to their daily diet.</p>
        <p><strong>Shake Well and Ingest Orally</strong></p>
        <p><strong>Each 30ml bottle contains 450mg of CBD – One full 1ml dropper contains 15mg of CBD</strong></p>
        <p><strong>Ingredients:</strong>&nbsp;Organic grapeseed oil, organic hempseed oil, organic virgin coconut oil, organic orange oil, stevia extract</p>
        </div>`,
        price:75.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mary’s 1:1 THC/CBD Tincture",
        image:"./downloaded-images2/TINCTURES/Marys-1-1-1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Combining the benefits of both THC and CBD our carefully crafted ratios ensure customers can get the right blend for their needs.&nbsp;<strong>1</strong><strong>:1 THC/CBD Tincture</strong>&nbsp;is suitable for all needs.</p>
        <p><strong>Each Vial Contains 500mg THC &amp; 500mg CBD&nbsp;in Grapeseed Oil</strong></p>
        <p><strong>Each 1ml Dropper Contains 10mg of THC and 10mg of CBD</strong></p>
        <p><strong>Directions: Always start with a small portion to determine your tolerance level</strong></p>
        </div>`,
        price:70.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:" Mary’s 1000mg    CBD Tincture",
        image:"./downloaded-images2/TINCTURES/Marys-1000mg-CBD-Tincture.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 1000mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 1000mg CBD with a dropper of 1ml/20mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>1000mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:80.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mary’s 1500mg THC Tincture",
        image:"./downloaded-images2/TINCTURES/Marys-1500thc-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_Center" class="flex_display flex_vbox">
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_fld_hfxs75de" class="">
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_fld_hfxs75de" class=" flex_vbox">
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_fld_hfxs75de_proxy" class="s_usaAWRichTextClickableSkin">
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_fld_hfxs75de_proxyrichTextContainer" class="s_usaAWRichTextClickableSkin_richTextContainer s_usaAWRichTextClickableSkinrichTextContainer">
        <p class="font_8"><strong>Mary’s Edibles</strong>&nbsp;<strong>1500mg THC Tincture&nbsp;</strong>is made from&nbsp;high quality grapeseed oil. Grapeseed Oil is combined with the finest tested THC extract to ensure accurate levels for correct dosing.&nbsp;We selected high quality grapeseed oil as it is ideal for multi purpose use , known for its suitability for topical treatments means this is an&nbsp;ideal product for both oral and applied treatments.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="comp-ir5xvlud_TestimonialsView_i6f6hb4w2_dup_i6m5p5li155_dup_i6qm3pc3335_dup_i6tgyzus52_dup_i70h8xv6192_dup_i7g5t86w229_dup_i9eax8l9240_ir5xvluu_Testimonials_i6f6hb4u1_7__0_0_0_0_centerToRightSpacer_child">
        <p><strong>Each Vial Contains 1500mg&nbsp;THC</strong></p>
        <p><strong>Each 1ml Dropper Contains 30mg of THC</strong></p>
        </div>
        </div>`,
        price:60.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mary’s 500mg CBD Tincture ",
        image:"./downloaded-images2/TINCTURES/Marys-500mg-CBD-Tincture-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s 500mg CBD Tincture&nbsp;</strong>is made by using the finest blend of CBD extract and grapeseed oil so that consumers can use orally and topically. This tincture is formulated to contain no THC so it wont produce any psychoactive effects.</p>
        <p><strong>Each 50ml tincture contains 500mg CBD with a dropper of 1ml/10mg CBD</strong></p>
        <p>&nbsp;</p>
        <p><strong>Recommended Dose:</strong></p>
        <p>500mg CBD tincture in 50ml – Shake well. Ingest orally 1 full dropper, taken 1-2 times per day, preferably with food.</p>
        </div>`,
        price:45.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mary’s Edibles 4:1 THC/CBD Tincture",
        image:"./downloaded-images2/TINCTURES/Marys-edibles-41-THC-CBD-tincture-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mary’s Edibles 4:1 THC/CBD Tincture</strong>&nbsp;combines the benefits of both THC and CBD. Every bottle comes with a 1ml syringe which can hold up to 20mg of THC and 5mg of CBD. THC and CBD work wonders together and with this precise blend, users can comfortably dose. We suggest to start slow with half of the syringe and increase the dosage after about 20 minutes if you do not feel anything, until you feel desired effects.</p>
        <p><strong>Every 50ml bottle contains 100mg of THC and 250mg of CBD.</strong></p>
        </div>`,
        price:70.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Miss Envy Sutra Massage Oil 300mg THC",
        image:"./downloaded-images2/TINCTURES/MissEnvy-sutra-massage-gallery-2-1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Sutra Massage Oil</strong>&nbsp;is 100% organic. THC infused massage oil, designed to deeply penetrate, relax an soothe. 300mg THC/bottle.</p>
        <p><em>Miss Envy Botanicals’</em>&nbsp;signature blend was developed to create a sensual aromatic experience, bringing couples to a higher level of intimacy. A 100% organic blend of oils specially formulated to arouse, soothe and nourish your partner from head to toe.</p>
        <p>&nbsp;</p>
        <p><strong>Miss Envy Botanicals</strong>&nbsp;is dedicated to producing 100% organic medicinal&nbsp;cannabis products&nbsp;for patients available at upscale dispensaries nationwide. We have a wide variety of products ranging from topical skin care, culinary additives, and&nbsp;cannabis oil/Phoenix tears. All of our creations are produced with only the best organic non-GMO ingredients, and infused with love.</p>
        </div>`,
        price:45.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota 1:1 1000mg Tincture",
        image:"./downloaded-images2/TINCTURES/Mota-1-1-Tincture-600x600-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1:1 1000mg Tincture</strong>&nbsp;is perfect for fast, easy, and discreet anytime use. This tincture combines the power of two of the most powerful cannabis compounds, using full spectrum ingredients to provide relief from pain, stress, inflammation, insomnia, depression and anxiety.</p>
        <p><strong>500mg THC + 500mg CBD per Tincture /<em>&nbsp;16.6mg THC + 16.6mg CBD per 1ml dropper</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        </div>`,
        price:70.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota Black 1000 mg THC  Tincture",
        image:"./downloaded-images2/TINCTURES/Mota-Black-THC-Distillate-Tincture-1000MG-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota Black 1000 mg THC Tincture</strong><strong>&nbsp;</strong>is perfect for fast, easy, and discreet use. Using MCT oil as a carrier, THC is quickly absorbed throughout your body to relieve pain, depression, stress and anxiety. This tincture is lightly flavoured with peppermint to provide a great tasting oil that is easy to hold under your tongue for fast sublingual absorption.</p>
        <p><strong>1000mg THC</strong>&nbsp;<strong>per 15ml bottle / 66.6<em>mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Pain | Anxiety | Depression | Stress | Restlessness | Insomnia</strong></em></p>
        </div>`,
        price:70.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota 1000 mg CBD  Tincture",
        image:"./downloaded-images2/TINCTURES/MOTA-CBD1000-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1000 mg CBD Tincture&nbsp;</strong>is perfect for those looking to medicate using CBD with higher dosages.&nbsp;<em>CBD</em>&nbsp;provides no psychoactive effects that you would find from THC. Anyone looking to alleviate pain, inflammation, arthritis, muscle spasms, insomnia, epilepsy and more should focus on adding CBD to their daily diet.</p>
        <p><strong>Shake Well and Ingest Orally</strong></p>
        <p><strong>Each 30ml bottle contains 1000mg of CBD – One full 1ml dropper contains 33.3mg of CBD</strong></p>
        <p><strong>Ingredients:</strong> Organic grapeseed oil, organic hempseed oil, organic virgin coconut oil, organic orange oil, stevia extract.</p>
        </div>`,
        price:95.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota Indica Tincture 900 mg THC",
        image:"./downloaded-images2/TINCTURES/Mota-Indica-THC-Tincture-300x300-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota’s Indica Tincture</strong>&nbsp;<strong>900mg THC</strong>&nbsp;is perfect for fast, easy, and discreet use. This tincture has deeply relaxing, soothing body&nbsp;effects that are great for relieving problems with sleep, various pain conditions, and restlessness.</p>
        <p><strong>900mg THC</strong>&nbsp;<strong>per bottle /&nbsp;<em>30mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Insomnia | Stress | Pain | Appetite Loss | Restlessness | Anxiety | Depression | Muscle Spasms</strong></em></p>
        </div>`,
        price:50.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota Sativa Tincture 900 mg THC",
        image:"./downloaded-images2/TINCTURES/Mota-Sativa-THC-Tincture-300x300-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota’s Sativa Tincture</strong>&nbsp;<strong>900mg THC</strong>&nbsp;is perfect for fast, easy, and discreet daytime use. This tincture provides relief from pain and stress while keeping you motivated throughout the day.</p>
        <p><strong>900mg THC</strong>&nbsp;<strong>per tincture /&nbsp;<em>30mg THC per 1ml dropper&nbsp;</em></strong></p>
        <p><strong>Recommended dose:</strong>&nbsp;1/3 a dropper to 1 full dropper, taken 1-2 times per day, preferably with food. Dose can be adjusted accordingly until the desired effects are achieved.</p>
        <p><em><strong>Stress | Pain | Appetite Loss | Depression | Muscle Spasms | Restlessness</strong></em></p>
        </div>`,
        price:50.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Mota 1:1 Sleep Tincture",
        image:"./downloaded-images2/TINCTURES/Mota-Sleep-Tincture-1to1-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Mota 1:1 Sleep Tincture</strong>&nbsp;is perfect for those looking to have a great nights sleep! This special formulated tincture consists of indica based THC oil, CBD isolate, organic botanicals and melatonin. This combination will help users achieve a better and faster sleep every night. The 2 most powerful cannabis compounds, THC and CBD work really well together to give you a goods night sleep.</p>
        <p><strong>500mg THC + 500mg CBD per Tincture /<em>&nbsp;16.6mg THC + 16.6mg CBD per 1ml dropper&nbsp;+ 5mg Melatonin per 1ml</em></strong></p>
        <p><strong>Suggested Use:</strong>&nbsp;Shake well and Ingest .5ml &nbsp;to 1ml orally before bedtime.</p>
        </div>`,
        price:70.00,
        category:"TINCTURES",
        countInStock: 30,
    },
    {
        name:"Smyle CBD V-Liquid 200mg  E-Juice",
        image:"./downloaded-images2/VAPORIZERS/bottles-247x247-11.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Does this get you high? NO! This a non-psychoactive, all natural&nbsp;<b>Smyle CBD V-Liquid 200mg 400mg E-Juice&nbsp;</b>is the perfect option for those looking for&nbsp;<a href="https://herbapproach.com/product-category/cbd/" target="_blank" rel="noopener">CBD</a>&nbsp;product that absorbs and takes effect faster than traditional creams or&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">edibles</a>, all while tasting great using&nbsp;<strong>Smyle’s</strong>&nbsp;all natural flavours.</p>
        <p><strong>200mg of CBD in 15ml of E-Juice</strong></p>
        <p><strong>Only to Be Used with E-Juice Vaporizers</strong></p>
        <p><strong>Available in 4 Flavours:</strong></p>
        <ul>
        <li><strong>Winter</strong></li>
        <li><strong>Lemon Lime</strong></li>
        <li><strong>Orange</strong></li>
        <li><strong>Natural</strong></li>
        </ul>
        </div>`,
        price:70.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Smyle CBD V-Liquid 400mg E-Juice",
        image:"./downloaded-images2/VAPORIZERS/bottles-247x247-12.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Does this get you high? NO! This a non-psychoactive, all natural&nbsp;<b>Smyle CBD V-Liquid 400mg 400mg E-Juice&nbsp;</b>is the perfect option for those looking for&nbsp;<a href="https://herbapproach.com/product-category/cbd/" target="_blank" rel="noopener">CBD</a>&nbsp;product that absorbs and takes effect faster than traditional creams or&nbsp;<a href="https://buylowgreen.com/product-category/edibles/" target="_blank" rel="noopener">edibles</a>, all while tasting great using&nbsp;<strong>Smyle’s</strong>&nbsp;all natural flavours.</p>
        <p><strong>400mg of CBD in 15ml of E-Juice</strong></p>
        <p><strong>Only to Be Used with E-Juice Vaporizers</strong></p>
        <p><strong>Available in 4 Flavours:</strong></p>
        <ul>
        <li><strong>Winter</strong></li>
        <li><strong>Lemon Lime</strong></li>
        <li><strong>Orange</strong></li>
        <li><strong>Natural</strong></li>
        </ul>
        </div>`,
        price:70.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Smyle THC V-Liquid 500mg E-Juice",
        image:"./downloaded-images2/VAPORIZERS/bottles-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>This activated, all natural&nbsp;<strong>Smyle&nbsp;</strong><strong>THC V-Liquid E-Jucie</strong>&nbsp;uses only the finest quality of&nbsp;<a href="https://buylowgreen.com/" target="_blank" rel="noopener"><strong>BC Bud</strong></a>&nbsp;run&nbsp;<a href="https://buylowgreen.com/product-category/concentrates/" target="_blank" rel="noopener">distillate</a>&nbsp;for our pure form THC. That is combined with our delicious flavours, giving you the clean, natural, discreet vape you have been searching for.</p>
        <p><strong>Only to Be Used with E-Juice Vaporizers</strong></p>
        <p><strong>500mg THC (5ml bottle)</strong></p>
        <p><strong>Available In:</strong></p>
        <ul>
        <li><strong>Natural</strong></li>
        <li><strong>Lemon Lime</strong></li>
        <li><strong>Winter</strong></li>
        <li><strong>Orange</strong></li>
        </ul>
        </div>`,
        price:40.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy Refill  Cartridge",
        image:"./downloaded-images2/VAPORIZERS/Flight-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>Welcome to the result of years spent exploring multiple forms of cannabis oil and vaporizer tanks.&nbsp;<strong>Bob/</strong><strong>Keyy Refill Cartridge</strong>&nbsp;are developed with a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a&nbsp;<a href="https://buylowgreen.com/product-category/vaporizers/" target="_blank" rel="noopener"><strong>vape pen</strong></a>&nbsp;design that quickly vaporizes the thickest and most purified oil. (<em>Not recommended for use with other pen systems.)</em></p>
        <p>Choose from&nbsp;<b>8</b>&nbsp;classic and satisfying flavours!</p>
        <p><strong>Flavours Include</strong></p>
        <ul>
        <li>Grapefruit Haze</li>
        <li>Blueberry</li>
        <li>Green Crack God</li>
        <li>Pineapple</li>
        <li>Peppermint</li>
        <li>Mango</li>
        <li>Tangerine</li>
        <li>Sour Diesel</li>
        </ul>
        </div>`,
        price:50.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Distillate Disposable  Vape Pen",
        image:"./downloaded-images2/VAPORIZERS/hoote_pen-e1530141561231-247x247-1.png",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hooti Extracts</strong>&nbsp;delivers another&nbsp;<em>high</em>&nbsp;quality&nbsp;product with their&nbsp;<strong>THC Distillate Disposable Vape Pen</strong>. Each vape pen is made from&nbsp;<em>THC Distillate</em>, an over 92% THC&nbsp;<strong><a href="https://buylowgreen.com/" target="_blank" rel="noopener">cannabis</a>&nbsp;extract</strong>. Processed in a state of the art facility through a short loop distillation, we are left with a<em>&nbsp;solvent free extract</em>.</p>
        <p>Every&nbsp;<strong>disposable vaporizer</strong>&nbsp;is specifically designed with ceramic coils for proper consumption of distillate. The sleek design allows patients&nbsp;to medicate with ease and discretely on the go. Each vape pen carries 500 mg of&nbsp;<em>THC Distillate.</em></p>
        <p>Non rechargeable and non refillable. Each battery is 320 mah and equals roughly 150 puffs.</p>
        </div>`,
        price:60.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Hooti Distillate Pen Cartridges Mix and Match",
        image:"./downloaded-images2/VAPORIZERS/hooti-cart_green-crack-1-600x399-247x247-2(1).jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hooti Vaporizer</strong>&nbsp;<strong>Pen Refill Cartridges!</strong>&nbsp;Each cartridge is universally designed with 510 threading which contains 1 gram of&nbsp;<strong>Hooti’s Premium THC Distillate</strong>.</p>
        <p><strong>Strains:</strong></p>
        <ul>
        <li>Purple Kush</li>
        <li>Sour Tangie</li>
        <li>Death Bubba</li>
        <li>Wedding Cake</li>
        <li>God’s Green Crack</li>
        <li>King Kush</li>
        <li>Hawaiian Cookies</li>
        <li>Green Crack</li>
        <li>Afghan Kush</li>
        <li>Trainwreck</li>
        </ul>
        </div>`,
        price:135.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Pen Refill  Cartridge",
        image:"./downloaded-images2/VAPORIZERS/hooti-cart_green-crack-1-600x399-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hooti Extracts Vaporizer</strong>&nbsp;<strong>Pen Refill Cartridges!</strong>&nbsp;Each cartridge is universally designed with 510 threading which contains 1 gram of&nbsp;<strong>Hooti’s Premium THC Distillate</strong>.</p>
        <p><strong>Disclaimer: Only use the charger provided in the kit. Charging takes around 1 hour. Overcharging may cause battery failure.</strong></p>
        <p><strong>Strains:</strong></p>
        <ul>
        <li>Purple Kush</li>
        <li>Sour Tangie</li>
        <li>Death Bubba</li>
        <li>Wedding Cake</li>
        <li>God’s Green Crack</li>
        <li>King Kush</li>
        <li>Hawaiian Cookies</li>
        <li>Green Crack</li>
        <li>Afghan Kush</li>
        <li>Trainwreck</li>
        </ul>
        </div>`,
        price:45.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts THC Vaporizer Pen Kit",
        image:"./downloaded-images2/VAPORIZERS/hooti-pen-600x399-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hooti Extracts THC Vaporizer Pen Kit&nbsp;</strong>consists of one battery, one charger and a cartridge of your choice.</p>
        <p>Each cartridge contains 1 gram of&nbsp;<strong>Hooti’s Premium THC Distillate</strong>.</p>
        <p><strong>Disclaimer: Only use the charger provided in the kit. Charging takes around 1 hour. Overcharging may cause battery failure.</strong></p>
        <p><strong>Strains:&nbsp;</strong></p>
        <ul>
        <li>Purple Kush</li>
        <li>Sour Tangie</li>
        <li>Death Bubba</li>
        <li>Wedding Cake</li>
        <li>God’s Green Crack</li>
        <li>King Kush</li>
        <li>Hawaiian Cookies</li>
        <li>Green Crack</li>
        <li>Afghan Kush</li>
        <li>Trainwreck</li>
        </ul>
                        </div>`,
        price:70.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Hooti Extracts Rechargeable Battery",
        image:"./downloaded-images2/VAPORIZERS/hooti-rechargeable-battery-1-1-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Hooti Extracts Rechargeable Battery&nbsp;</strong>is a high quality battery that is compatible with all 510 thread cartridges. Included in this battery is a USB charger so you can charge your battery almost anywhere. We advise users to charge the battery once received and to only use the battery provided in the kit. Charging can take up to an hour and we suggest to not over charge.</p>
        <p><strong>Every battery comes with 1 USB charger</strong></p>
        </div>`,
        price:20.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Bob/Keyy Vape Pen  Kit",
        image:"./downloaded-images2/VAPORIZERS/Keyy-Starter-Kit-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Bob/Keyy Pen Kit</strong>&nbsp;is a state of the art distillate vaporizer. The cartridge contains 0.8ml of Keyy oil.</p>
        <p><strong>This Bob/Keyy Vape Pen kit consists of 1 cartridge, 1 battery, and 1 charger.</strong></p>
        <p><strong>ATTENTION* Please prime cartridge before using to avoid a burnt or off flavour. Simply take 5 long, 5 second pulls without pressing the power button.&nbsp;</strong></p>
        <p>We have successfully developed a proprietary technique to distill cannabis oil that removes ALL impurities and co-developed a pen vaporizer design that quickly vaporizes the thickest and most purified oil. This is not a pen for puffing. It’s a pen for the long haul.</p>
        </div>`,
        price:70.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Pyro Extracts Ceramic Vaporizer Cartridges",
        image:"./downloaded-images2/VAPORIZERS/Pyro-Ceramic-Cartridge-Watermelon-2-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p><strong>Pyro Extracts Ceramic Vaporizer Cartridges&nbsp;</strong>contain high quality THC distillate blended with natural terpenes which makes every cartridge unique in their own way. Enjoy these sleek and comfortable Pyro Extracts Ceramic Cartridges in all 510 thread compatible batteries. All of Pyro’s ceramic tanks contain no traces of cotton, heavy metal, or glue.</p>
        <p><strong>Every ceramic cartridge contains 0.5ml of THC distillate</strong></p>
        </div>`,
        price:40.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Rocky Mountain Rosin – Rosin Vape Pen Kit",
        image:"./downloaded-images2/VAPORIZERS/Rocky-Mount-Rosin-600x600-600x600-247x247-2.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the finest Rosin pens around,&nbsp;<strong>Rocky Mountain Rosin Vape Pen</strong>&nbsp;keep all their natural terpenes and packs a serious punch!</p>
        <p>Kits include a 0.5 ml filled cartridge, 300 mg of distillate, 125 mg of dry sift citrus skunk rosin, and 75 mg of organic terpenes with essential oils.</p>
        <p>Also includes USB Charger, and non-disposable rechargeable battery inside a sleek case.</p>
        <p>Featuring a glass tank and ceramic heating element, this pen comes with everything you need to get smoking some of the finest Rosin extracted pens around.</p>
        <p><strong>Comes in 8 Flavours:</strong></p>
        <ul>
        <li>Citrus Skunk</li>
        <li>Pineapple Punch</li>
        <li>Cherry OG</li>
        <li>Trainwreck</li>
        <li>Watermelon</li>
        <li>Mango Haze</li>
        <li>Trainwreck</li>
        <li>BC Rockstar</li>
        </ul>
        <p><strong>Rocky Mountain</strong>&nbsp;is combining high quality extracts and a dedication to top shelf&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis</a>&nbsp;products. Made in B.C.</p>
        </div>`,
        price:70.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Rocky Mountain Rosin – Rosin Vape Pen Cartridge",
        image:"./downloaded-images2/VAPORIZERS/Rocky-mountain-rosin-cart-3-600x600-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the finest Rosin pens around,&nbsp;<strong>Rocky Mountain Rosin Vape Pen</strong>&nbsp;keep all their natural terpenes and packs a serious punch!</p>
        <p>Includes a 0.5 ml filled cartridge, 300 mg of distillate, 125 mg of dry sift citrus skunk rosin, and 75 mg of organic terpenes with essential oils.</p>
        <p>Featuring a glass tank and ceramic heating element, this pen comes with everything you need to get smoking some of the finest Rosin extracted pens around.</p>
        <p><strong>Comes in 7 Different Flavours:</strong></p>
        <ul>
        <li><strong>Citrus Skunk</strong></li>
        <li><strong>Red Congolese</strong></li>
        <li><strong>Trainwreck</strong></li>
        <li><strong>Cherry OG</strong></li>
        <li><strong>Pineapple Punch&nbsp;</strong></li>
        <li><strong>Mango Haze</strong></li>
        <li><strong>Watermelon Kush</strong></li>
        </ul>
        <p><strong>Rocky Mountain</strong>&nbsp;is combining high quality extracts and a dedication to top shelf&nbsp;<a href="https://buylowgreen.com/shop/" target="_blank" rel="noopener">cannabis</a>&nbsp;products. Made in B.C.</p>
        </div>`,
        price:40.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
    {
        name:"Rocky Mountain Rosin – Rosin  Vape Pen Cartridge",
        image:"./downloaded-images2/VAPORIZERS/Rocky-mountain-rosin-cart-3-600x600-247x247-1.jpg",
        description:`<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
        <p>One of the finest Rosin pens around,&nbsp;<strong>Rocky Mountain Rosin Vape Cartridge</strong>&nbsp;keep all their natural terpenes and packs a serious punch!</p>
        <p><strong>Comes in 7 Different Flavours:</strong></p>
        <ul>
        <li><strong>Citrus Skunk</strong></li>
        <li><strong>Red Congolese</strong></li>
        <li><strong>Trainwreck</strong></li>
        <li><strong>Cherry OG</strong></li>
        <li><strong>Pineapple Punch&nbsp;</strong></li>
        <li><strong>Mango Haze</strong></li>
        <li><strong>Watermelon Kush</strong></li>
        </ul>
        </div>`,
        price:40.00,
        category:"VAPORIZERS",
        countInStock: 30,
    },
],

 product1: [
        {
            name:"glasses",
            image:"./downloded-images/edibles/5972208-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessories Pack",
            image:"./downloded-images/edibles/71Fw7qtMndL._SL1500_-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"table",
            image:"./downloded-images/edibles/Alice-brownies-600x484-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacket",
            image:"./downloded-images/edibles/Big-S-Oatmeal-Cookie-600x440-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shirt",
            image:"./downloded-images/edibles/Brownies-n-Cream-600x476-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacoste",
            image:"./downloded-images/edibles/Cannabis-Chili-Lime-Peanuts-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm angel",
            image:"./downloded-images/edibles/Cannabis-Chocolate-Chip-Cookie-Bite-300x190-300x190-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star up",
            image:"./downloded-images/edibles/Cannabis-Savory-Pretzels-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star2 up",
            image:"./downloded-images/edibles/Cannabis-Savory-Pretzels-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glasses2",
            image:"./downloded-images/edibles/carrot-cake-cookie-600x533-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessoriesd Pack",
            image:"./downloded-images/edibles/cibdextinctures-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tadble",
            image:"./downloded-images/edibles/Day-Trippers-600x492-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jackets",
            image:"./downloded-images/edibles/fruit-by-the-foot_variety-300x281.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shirts",
            image:"./downloded-images/edibles/Good-Day-Sunshine-600x448-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostes",
            image:"./downloded-images/edibles/Honey-Nut-Bar-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm angels",
            image:"./downloded-images/edibles/Honey-Nut-Bar-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stars up",
            image:"./downloded-images/edibles/Merciful-Brownie-600x445-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star ups",
            image:"./downloded-images/edibles/Merciful-Brownie-600x445-300x300-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glass",
            image:"./downloded-images/edibles/Mint-Dreams-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessory Pack",
            image:"./downloded-images/edibles/Moroc-Caramello-300x300-1-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"A",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tabled",
            image:"./downloded-images/edibles/Mountain-Man-Cake-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketss",
            image:"./downloded-images/edibles/OMG-Brownie-Cheesecake-600x477-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"ts-shirt",
            image:"./downloded-images/edibles/PB-Krisps-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lascoste",
            image:"./downloded-images/edibles/Peanut-Butter-MM-Cookie1-1-1 (1).jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palms angels",
            image:"./downloded-images/edibles/Peanut-Butter-MM-Cookie1-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stare ups",
            image:"./downloded-images/edibles/runtz_cookies_mentalist-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stard up",
            image:"./downloded-images/edibles/Sensible-Seed-Mix-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glases",
            image:"./downloded-images/edibles/Smashing-Pumpkin-600x508-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessorie Pack",
            image:"./downloded-images/edibles/Sweet-Dreams-300x265-300x265-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablesed",
            image:"./downloded-images/edibles/The-Original-Cookie-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"A",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketse",
            image:"./downloded-images/edibles/The-Truffle-Brownie-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"B",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shirthhgg",
            image:"./downloded-images/edibles/The-Truffle-Brownie-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostehh",
            image:"./downloded-images/edibles/True-Confections-600x466-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmangel",
            image:"./downloded-images/edibles/Walnut-Fantasy-600x533-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"starup",
            image:"./downloded-images/edibles/Walnut-Fantasy-600x533-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"staup",
            image:"./downloded-images/edibles/Wana-Chocolate-Chip-Brownies-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glas",
            image:"./downloded-images/edibles/Wana-Jewels-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessories Pa",
            image:"./downloded-images/edibles/wanaroll-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablesj",
            image:"./downloded-images/edibles/Watermelon-Tarts-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketjh",
            image:"./downloded-images/edibles/Watermelon-Tarts-300x285-300x285-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"edibles",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"thirt",
            image:"./downloded-images/hash/bubble-hash-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostess",
            image:"./downloded-images/hash/bubble-hash-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmbvgel",
            image:"./downloded-images/hash/Charas-Hash-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stap",
            image:"./downloded-images/hash/IMG_3686-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stup",
            image:"./downloded-images/hash/IMG_3690-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glaes",
            image:"./downloded-images/hash/Iso-hash-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"AccessoPack",
            image:"./downloded-images/hash/Nepalese-Stick-Hash-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tble",
            image:"./downloded-images/hash/Nepalese-Temple-Balls-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketyt",
            image:"./downloded-images/hash/Scissor-Hash-finger-hash-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tirt",
            image:"./downloded-images/hash/Super-Nepalese-Hash-300x300-1-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hash",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacohste",
            image:"./downloded-images/hybrid/10578993-9567-4caa-a734-7cfc09f4e4d0-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmngel",
            image:"./downloded-images/hybrid/14908345_328382430863113_5307346166316093482_n-228x228-3-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"str up",
            image:"./downloded-images/hybrid/47-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star p",
            image:"./downloded-images/hybrid/6cd72206-230a-48c7-a268-32a15180f4c2-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lasses",
            image:"./downloded-images/hybrid/823C4265-E527-4D2F-9C0C-F3C8AB6EAC3C-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessories Pck",
            image:"./downloded-images/hybrid/ak-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablekjd",
            image:"./downloded-images/hybrid/apple-jacks.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketaspad",
            image:"./downloded-images/hybrid/BLURE-DREAM-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-sht",
            image:"./downloded-images/hybrid/buy-Gelato-marijuana-weed-online-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostkdjfe",
            image:"./downloded-images/hybrid/Buy-Girl-Scout-Cookies-weed-online-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm anel",
            image:"./downloded-images/hybrid/Buy-Master-Kush-_-Fresh-Weed-online-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"sar up",
            image:"./downloded-images/hybrid/buy-Skywalker-OG-weed-online-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star2 p",
            image:"./downloded-images/hybrid/cartridges-grand-daddy-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glasggggs",
            image:"./downloded-images/hybrid/cartridges-pineapple--300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessies Pack",
            image:"./downloded-images/hybrid/d52d096afb3c109d33c8bd50063affd7-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tabsudjle",
            image:"./downloded-images/hybrid/Electic-kush-228x228-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketuyg",
            image:"./downloded-images/hybrid/FRUITY-PEBBLES-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-skjrt",
            image:"./downloded-images/hybrid/FULL_GRAM_ROMULANGRAPEFRUIT-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacosmdyte",
            image:"./downloded-images/hybrid/ge-41-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palflm angel",
            image:"./downloded-images/hybrid/GORILLA-GLUE-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star ujy",
            image:"./downloded-images/hybrid/GT.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stsear up",
            image:"./downloded-images/hybrid/image17-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glajssses",
            image:"./downloded-images/hybrid/infinity-Kush-228x228-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessorisyamgaes Pack",
            image:"./downloded-images/hybrid/jungle-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"le;sdsl",
            image:"./downloded-images/hybrid/KOOL-AID-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketnnnn",
            image:"./downloded-images/hybrid/ld-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shasrt",
            image:"./downloded-images/hybrid/liberty-haze-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostejhjghggv",
            image:"./downloded-images/hybrid/mario-carts-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm l;langel",
            image:"./downloded-images/hybrid/ORANGE-BANG-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star upksd",
            image:"./downloded-images/hybrid/STARBURST-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star2 jhjup",
            image:"./downloded-images/hybrid/sunk-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"gles",
            image:"./downloded-images/hybrid/Sunset-sherbet-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessoriesk",
            image:"./downloded-images/hybrid/train-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"hybrid",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tabljsdm",
            image:"./downloded-images/indica/12795526_1571136546546553_1290395645755476076_n-1-228x228-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jact",
            image:"./downloded-images/indica/6cd72206-230a-48c7-a268-32a15180f4c2-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"thirnhnh",
            image:"./downloded-images/indica/apple-jacks.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacojhge",
            image:"./downloded-images/indica/BISCOTTI-LIIIL-500mg-MI_1_x450-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm nge",
            image:"./downloded-images/indica/Blackberry-Kush-300x300@2x-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star upsd",
            image:"./downloded-images/indica/Buy-Blue-Dream-Weed-510x491-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star upshash",
            image:"./downloded-images/indica/Buy-Purple-Kush-marijuana-weed-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"gls",
            image:"./downloded-images/indica/cartridges-skywalker-og-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accies Pack",
            image:"./downloded-images/indica/FORBIDDEN-FRUIT-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablsdke",
            image:"./downloded-images/indica/FRUITY-PEBBLES-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacketksd\as",
            image:"./downloded-images/indica/FULL-RAM-SKYWALKER-OG-VAPE-CARTRIDGES-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shiindica",
            image:"./downloded-images/indica/FULL-RAM-SKYWALKER-OG-VAPE-CARTRIDGES-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacostekdfzj",
            image:"./downloded-images/indica/FULL_GRAM_KING-LOUIS-VAPE-CARTRIDGES-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmgel",
            image:"./downloded-images/indica/Gods-gift-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star indica",
            image:"./downloded-images/indica/green-crack-1-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"sup",
            image:"./downloded-images/indica/GT.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glasindica",
            image:"./downloded-images/indica/holy-grail-kush-300x300-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessories Paindicak",
            image:"./downloded-images/indica/image17-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"taindica",
            image:"./downloded-images/indica/jungle-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jaindicat",
            image:"./downloded-images/indica/KOOL-AID-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shiindicart",
            image:"./downloded-images/indica/kosher-kush-reserva-privada-300x300-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacosindicate",
            image:"./downloded-images/indica/lav-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm aindicangel",
            image:"./downloded-images/indica/mario-carts-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star uindip",
            image:"./downloded-images/indica/mas-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star indica up",
            image:"./downloded-images/indica/Northern-Lights-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glindicaasses",
            image:"./downloded-images/indica/ORANGE-BANG-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessories indicaack",
            image:"./downloded-images/indica/orange-kush-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablindie",
            image:"./downloded-images/indica/PURPLE-PUNCH-500mg-MI_x450-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacindicet",
            image:"./downloded-images/indica/purple-urkle-aka-humboldt-purple-purple-urple-lavender-300x300-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"B",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tndicashirt",
            image:"./downloded-images/indica/querkle-kush-1-300x300-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"B",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"laindicae",
            image:"./downloded-images/indica/Runtz-og-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"indiclm angel",
            image:"./downloded-images/indica/SFV-OG-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star indup",
            image:"./downloded-images/indica/SFV-OG.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"ndicar2 up",
            image:"./downloded-images/indica/skywalker-og--300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glindicases",
            image:"./downloded-images/indica/STARBURST-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessorindicaack",
            image:"./downloded-images/indica/WHITE-FIRE-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"indica",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tie",
            image:"./downloded-images/oils/cbd-oil-drops/461e1f093f139c6ad179b4858d5eb7e8-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jackoilset",
            image:"./downloded-images/oils/cbd-oil-drops/cbd-drops-10-ml-kristians-cbd-1 (1).jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-soilst",
            image:"./downloded-images/oils/cbd-oil-drops/cbd-oil-hempotion-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"loilsoste",
            image:"./downloded-images/oils/cbd-oil-drops/cbd-oil-peppermint-cibdex-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm anoilsel",
            image:"./downloded-images/oils/cbd-oil-drops/CBD-olie-3.wm-455x600-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"staoilsp",
            image:"./downloded-images/oils/cbd-oil-drops/CO2-Canabis-Oil-Cartridge-700mg-1-1.png",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"staroils up",
            image:"./downloded-images/oils/cbd-oil-drops/colloidal-copper-water-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glaoilses",
            image:"./downloded-images/oils/cbd-oil-drops/Colloidal-Copper-Water-10-ppm-nano-copper.wm-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Acoilscessories Pack",
            image:"./downloded-images/oils/cbd-oil-drops/default_hemp_oil_facial_exfoliant_cannabis_beauty_defined_4-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tabloile",
            image:"./downloded-images/oils/cbd-oil-drops/file-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jackoil",
            image:"./downloded-images/oils/cbd-oil-drops/Hemp-Seed-Oil-THC-CBD-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shoilsrt",
            image:"./downloded-images/oils/cbd-oil-drops/Hemp-Seed-Oil-THC-CBD-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacoiste",
            image:"./downloded-images/oils/cbd-oil-drops/hennepzaadolie-plus-capsules-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmoingel",
            image:"./downloded-images/oils/cbd-oil-drops/RSHO-Gold-e1413384673175-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stoiap",
            image:"./downloded-images/oils/cbd-oil-drops/rsho-real-scientific-hemp-oil-blue-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"staoilsr2   p",
            image:"./downloded-images/oils/cbd-oil-drops/rsho-real-scientific-hemp-oil-gold-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"oilssses",
            image:"./downloded-images/oils/hemp-oil/17-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessoroilsack",
            image:"./downloded-images/oils/hemp-oil/cbd-gel-caps-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"toilse",
            image:"./downloded-images/oils/hemp-oil/file-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacoil",
            image:"./downloded-images/oils/hemp-oil/hemp-oil-gummies-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-oilsirt",
            image:"./downloded-images/oils/hemp-oil/TD-1oz-300mg-Spearmint-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"oils",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lososte",
            image:"./downloded-images/sativa/14908345_328382430863113_5307346166316093482_n-228x228-3-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm angsatival",
            image:"./downloded-images/sativa/asteroid-og-kush-228x130-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star sativaup",
            image:"./downloded-images/sativa/chocolope-strain-228x130-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stasativap",
            image:"./downloded-images/sativa/green-crack-1-3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star2 usativap",
            image:"./downloded-images/sativa/IMG_3643-4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glassativases",
            image:"./downloded-images/sativa/IMG_3643-5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessorsativaies Pack",
            image:"./downloded-images/sativa/IMG_3647-4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tabsativle",
            image:"./downloded-images/sativa/IMG_3647-5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacsatiet",
            image:"./downloded-images/sativa/jack-herer-medical-marijuana-strain-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-sativart",
            image:"./downloded-images/sativa/jackywhite_1-2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lsativaoste",
            image:"./downloded-images/sativa/Kali-Kush-228x228-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm ansatigel",
            image:"./downloded-images/sativa/nycdiesel-strain-228x130-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stsativap",
            image:"./downloded-images/sativa/OG-KuSH11-228x171-3-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stajhjgghsativap",
            image:"./downloded-images/sativa/panama-red-medical-marijuana-228x130-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"gsatises",
            image:"./downloded-images/sativa/pineapple-express-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accesssativasativaries Pack",
            image:"./downloded-images/sativa/PURE-KUSH-228x343-3-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tablsativasativae",
            image:"./downloded-images/sativa/purple-crack-marijuana-228x130-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacsativasatiket",
            image:"./downloded-images/sativa/Purple-Kush-Feminized-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"t-shirsativasatit",
            image:"./downloded-images/sativa/specification-for-Alaskan-Thunder-marijuana-strain-228x138-2-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lsativasatiste",
            image:"./downloded-images/sativa/sunk-4-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palmsativagel",
            image:"./downloded-images/sativa/super-lemon-haze-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"sativa",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stasativaup",
            image:"./downloded-images/shrooms/AF1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"starshroomsshro2 up",
            image:"./downloded-images/shrooms/B-300x300.png",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glashroomsses",
            image:"./downloded-images/shrooms/Blue-Meanie-2048x1536-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessshroomsories Pack",
            image:"./downloded-images/shrooms/cambodian-5-2048x1367-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tshroomsble",
            image:"./downloded-images/shrooms/D6Q376RIWBCKVEUVW5WSKKWA4M-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jacshroomst",
            image:"./downloded-images/shrooms/DSC01818-2048x1536-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tshroomshirt",
            image:"./downloded-images/shrooms/golden-teachers-5-2048x1367-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lashroomsste",
            image:"./downloded-images/shrooms/king-oyster-510x340-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palm ashroomsngel",
            image:"./downloded-images/shrooms/PE-510x305-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star ushroomsshrp",
            image:"./downloded-images/shrooms/portobello-510x340-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stashroomsshrop",
            image:"./downloded-images/shrooms/Room920-Golden-Teacher-Mushrooms-Milk-Chocolate-1-510x510-1-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"shrooms",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glshroomskkjhjbses",
            image:"./downloded-images/vape-cartridges/muha-meds/apple-jacks.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"vapecartridges Pack",
            image:"./downloded-images/vape-cartridges/muha-meds/BLURE-DREAM-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tavapecartridgese",
            image:"./downloded-images/vape-cartridges/muha-meds/cbd-drops-10-ml-kristians-cbd-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"jackevapecartridgest",
            image:"./downloded-images/vape-cartridges/muha-meds/CBD-olie-3.wm-455x600-300x300-1-1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:false
                },
                {
                    name: "option2",
                    price: 4,
                    default:true
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tvapecartridgeshirt",
            image:"./downloded-images/vape-cartridges/muha-meds/FORBIDDEN-FRUIT-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"lacvapecartridgesste",
            image:"./downloded-images/vape-cartridges/muha-meds/FRUITY-PEBBLES-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"palvapecartridgesngel",
            image:"./downloded-images/vape-cartridges/muha-meds/GT.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"C",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"stavapecartridges up",
            image:"./downloded-images/vape-cartridges/muha-meds/KOOL-AID-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"star2 vapecartridup",
            image:"./downloded-images/vape-cartridges/muha-meds/ORANGE-BANG-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true,
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"glvapecartridgesses",
            image:"./downloded-images/vape-cartridges/muha-meds/SFV-OG.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 3,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"Accessvapecartridgesies Pack",
            image:"./downloded-images/vape-cartridges/muha-meds/STARBURST-scaled-1-300x300.jpeg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            options:[
                {
                    name: "option1",
                    price: 8,
                    default:true
                },
                {
                    name: "option2",
                    price: 4,
                    default:false
                },
                {
                    name: "option3",
                    price: 5,
                    default:false
                }
            ],
            category:"vapecartridges",
            brand: ' Nike',
            rating: 5,
            numReviews: 10,
            countInStock: 30,
        },
        {
            name:"tvapecartridgesle",
            image:"./downloded-images/vape-cartridges/muha-meds/STRAWBERRY-COUCH-300x300.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"vapecartridges",
            brand: ' Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 30,
        }],

    products: [
        {
            name:"cool hat",
            image:"./downloded-images/hat10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat1",
            image:"./downloded-images/hat2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat2",
            image:"./downloded-images/hat3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat6",
            image:"./downloded-images/hat7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat3",
            image:"./downloded-images/hat1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat4",
            image:"./downloded-images/hat4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            rating: 4.5,
            countInStock: 30,
        },
        {
            name:"cool  hat4",
            image:"./downloded-images/hat5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"hat5",
            image:"./downloded-images/hat6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"C",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool hat1",
            image:"./downloded-images/hat8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool hat2",
            image:"./downloded-images/hat9.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:9.00,
            category:"hats",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe",
            image:"./downloded-images/shoes.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe1",
            image:"./downloded-images/shoes1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe2",
            image:"./downloded-images/shoes2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe3",
            image:"./downloded-images/shoes3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe4",
            image:"./downloded-images/shoes4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe5",
            image:"./downloded-images/shoes5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe6",
            image:"./downloded-images/shoes6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe7",
            image:"./downloded-images/shoes7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe8",
            image:"./downloded-images/shoes8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe9",
            image:"./downloded-images/shoes9.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"cool shoe10",
            image:"./downloded-images/shoes10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:30.00,
            options:[
                {
                    name: "size1",
                    price: 30,
                },
                {
                    name: "size2",
                    price: 40,
                },
                {
                    name: "size3",
                    price: 50,
                }
            ],
            category:"shoes",
            brand: ' Nike',
            countInStock: 30,
        },

        {
            name:"jaket1",
            image:"./downloded-images/jaket1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket2",
            image:"./downloded-images/jaket2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket3",
            image:"./downloded-images/jaket3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket4",
            image:"./downloded-images/jaket4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket5",
            image:"./downloded-images/jaket5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket6",
            image:"./downloded-images/jaket6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket7",
            image:"./downloded-images/jaket7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket8",
            image:"./downloded-images/jaket8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket9",
            image:"./downloded-images/jaket9.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"jaket10",
            image:"./downloded-images/jaket10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:50,
            category:"jackets",
            brand: ' Nike',
            countInStock: 30,
        },
        {
            name:"short1",
            image:"./downloded-images/short1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short2",
            image:"./downloded-images/short2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short5",
            image:"./downloded-images/short5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short3",
            image:"./downloded-images/shorts3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short4",
            image:"./downloded-images/shorts4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short6",
            image:"./downloded-images/shorts6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short7",
            image:"./downloded-images/shorts7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short8",
            image:"./downloded-images/shorts8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short9",
            image:"./downloded-images/shorts9.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short10",
            image:"./downloded-images/shorts10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short11",
            image:"./downloded-images/shorts11.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"short12",
            image:"./downloded-images/shorts12.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:20,
            category:"shorts",
            brand: ' Nike',
            countInStock: 20,
        },
        {
            name:"skirt1",
            image:"./downloded-images/skirt1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt2",
            image:"./downloded-images/skirt2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt3",
            image:"./downloded-images/skirt3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt4",
            image:"./downloded-images/skirt4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt5",
            image:"./downloded-images/skirt5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt6",
            image:"./downloded-images/skirt6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt7",
            image:"./downloded-images/skirt7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt8",
            image:"./downloded-images/skirt8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt",
            image:"./downloded-images/skirt.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"skirt10",
            image:"./downloded-images/skirt10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:35.5,
            category:"skirts",
            brand: ' Nike',
            countInStock: 25,
        },
        {
            name:"t-shirt1",
            image:"./downloded-images/tshit1.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt2",
            image:"./downloded-images/tshirt2.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt3",
            image:"./downloded-images/tshirt3.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt4",
            image:"./downloded-images/tshirt4.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt5",
            image:"./downloded-images/tshirt5.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt6",
            image:"./downloded-images/tshirt6.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt7",
            image:"./downloded-images/tshirt7.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt8",
            image:"./downloded-images/tshirt8.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt9",
            image:"./downloded-images/tshirt9.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        {
            name:"t-shirt10",
            image:"./downloded-images/tshirt10.jpg",
            description:"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
            price:45.5,
            category:"t-shirts",
            brand: ' Nike',
            countInStock: 22,
        },
        
    ],
    
}





export  default data