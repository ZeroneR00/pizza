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
              title='Пиццы'
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
                }
              ]}
              categoryId={3}
            />
            <ProductsGroupList
              title='Напитки'
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
                }
              ]}
              categoryId={4}
            />
          </div>
        </div>
      </div>

    </Container>

  </>
}
