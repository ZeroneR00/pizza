import { Container, Filters, Title } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return <>

    <Container className="mt-11">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>


    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className='w-[258px]'>
          <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title='Пицца'
              items={[
                {
                  id: 1,
                  name: "Маргарита",
                  imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 550 }]
                },
                {
                  id: 2,
                  name: "Пепперони",
                  imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 650 }]
                },
                {
                  id: 3,
                  name: "Четыре сыра",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 750 }]
                },
                {
                  id: 4,
                  name: "Гавайская",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 700 }]
                },
                {
                  id: 5,
                  name: "Барбекю",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 800 }]
                },
                {
                  id: 6,
                  name: "Мясная",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 850 }]
                },
                {
                  id: 7,
                  name: "Сырная",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 900 }]
                }
              ,
                {
                  id: 19,
                  name: "Вегетарианская",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 600 }]
                },
                {
                  id: 20,
                  name: "Грибная",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 650 }]
                },
                {
                  id: 21,
                  name: "Морская",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 850 }]
                },
                {
                  id: 22,
                  name: "Острая",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 700 }]
                },
                {
                  id: 23,
                  name: "Карбонара",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 750 }]
                }
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title='Комбо'
              items={[
                {
                  id: 7,
                  name: "Семейное комбо",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 1299 }]
                },
                {
                  id: 8,
                  name: "Дружеское комбо",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 999 }]
                },
                {
                  id: 9,
                  name: "Студенческое комбо",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 799 }]
                }
                ,
                {
                  id: 17,
                  name: "Комбо для двоих",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 899 }]
                },
                {
                  id: 18,
                  name: "Детское комбо",
                  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60", 
                  items: [{ price: 599 }]
                }
              ]}
              categoryId={2}
            />
            <ProductsGroupList
              title='Закуски'
              items={[
                {
                  id: 10,
                  name: "Картофель фри",
                  imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 250 }]
                },
                {
                  id: 11,
                  name: "Куриные крылышки",
                  imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 350 }]
                },
                {
                  id: 12,
                  name: "Наггетсы",
                  imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 300 }]
                },
                {
                  id: 13,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 14,
                  name: "Чай",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 15,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 16,
                  name: "Чай",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                } 
                ,
                {
                  id: 17,
                  name: "Луковые кольца",
                  imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 280 }]
                },
                {
                  id: 18, 
                  name: "Сырные палочки",
                  imageUrl: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 320 }]
                },
                {
                  id: 19,
                  name: "Чесночные гренки",
                  imageUrl: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 200 }]
                },
                {
                  id: 20,
                  name: "Картофельные дольки",
                  imageUrl: "https://images.unsplash.com/photo-1623238913973-21e45cced554?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 270 }]
                },
                {
                  id: 21,
                  name: "Креветки темпура",
                  imageUrl: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 450 }]
                },
                {
                  id: 22,
                  name: "Сырный соус",
                  imageUrl: "https://images.unsplash.com/photo-1585517920977-0ac1c21978c2?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 100 }]
                },
                {
                  id: 23,
                  name: "Кетчуп",
                  imageUrl: "https://images.unsplash.com/photo-1607604760190-ec9ccc12156e?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 80 }]
                },
                {
                  id: 24,
                  name: "Чили соус",
                  imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 90 }]
                },
                {
                  id: 25,
                  name: "Картофельное пюре",
                  imageUrl: "https://images.unsplash.com/photo-1600175087976-5d23cd67f553?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 230 }]
                },
                {
                  id: 26,
                  name: "Салат Цезарь",
                  imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 380 }]
                }
              ]}
              categoryId={3}
            />
             <ProductsGroupList
              title='Коклейли'
              items={[
                {
                  id: 10,
                  name: "Картофель фри",
                  imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 250 }]
                },
                {
                  id: 11,
                  name: "Куриные крылышки",
                  imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 350 }]
                },
                {
                  id: 12,
                  name: "Наггетсы",
                  imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 300 }]
                },
                {
                  id: 13,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 14,
                  name: "Чай",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 15,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 16,
                  name: "Чай",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                } 
                ,
                {
                  id: 17,
                  name: "Луковые кольца",
                  imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 280 }]
                },
                {
                  id: 18, 
                  name: "Сырные палочки",
                  imageUrl: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 320 }]
                },
                {
                  id: 19,
                  name: "Чесночные гренки",
                  imageUrl: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 200 }]
                },
                {
                  id: 20,
                  name: "Картофельные дольки",
                  imageUrl: "https://images.unsplash.com/photo-1623238913973-21e45cced554?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 270 }]
                },
                {
                  id: 21,
                  name: "Креветки темпура",
                  imageUrl: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 4520 }]
                },
                {
                  id: 22,
                  name: "Сырный соус",
                  imageUrl: "https://images.unsplash.com/photo-1585517920977-0ac1c21978c2?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 100 }]
                },
                {
                  id: 23,
                  name: "Кетчуп",
                  imageUrl: "https://images.unsplash.com/photo-1607604760190-ec9ccc12156e?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 80 }]
                },
                {
                  id: 24,
                  name: "Чили соус",
                  imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 90 }]
                },
                {
                  id: 25,
                  name: "Картофельное пюре",
                  imageUrl: "https://images.unsplash.com/photo-1600175087976-5d23cd67f553?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 2320 }]
                },
                {
                  id: 26,
                  name: "Салат Цезарь",
                  imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 3820 }]
                }
              ]}
              categoryId={4}
            />
            <ProductsGroupList
              title='Кофе'
              items={[
                {
                  id: 13,
                  name: "Кока-кола 0.5л",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 14,
                  name: "Спрайт 0.5л",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 15,
                  name: "Фанта 0.5л",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 16,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 17,
                  name: "Чай",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 18,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                },
                {
                  id: 19,
                  name: "Кофе",
                  imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60",
                  items: [{ price: 150 }]
                }

              ]}
              categoryId={5}
            />
          </div>
        </div>
      </div>

    </Container>

  </>
}
