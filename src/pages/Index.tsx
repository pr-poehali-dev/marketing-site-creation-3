import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Креативный<br />Маркетинг
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём яркие кампании, которые вдохновляют и приносят результат
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Наши услуги
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Комплексный подход к продвижению вашего бренда
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Megaphone",
                title: "SMM",
                description: "Управление социальными сетями, создание вирусного контента и комьюнити-менеджмент"
              },
              {
                icon: "Target",
                title: "Таргетированная реклама",
                description: "Настройка эффективных рекламных кампаний в соцсетях с максимальной конверсией"
              },
              {
                icon: "TrendingUp",
                title: "SEO-продвижение",
                description: "Вывод сайта в топ поисковых систем и увеличение органического трафика"
              },
              {
                icon: "Palette",
                title: "Брендинг",
                description: "Разработка уникального фирменного стиля и позиционирования бренда"
              },
              {
                icon: "Video",
                title: "Видеопродакшн",
                description: "Создание эффектных рекламных роликов, промо и анимационных видео"
              },
              {
                icon: "BarChart",
                title: "Аналитика",
                description: "Глубокий анализ данных, A/B тестирование и оптимизация маркетинговых стратегий"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in lg:order-1 order-2">
              <img 
                src="https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/dcad690d-7a54-43c0-b0fe-89dbcd7bfc0c.jpg" 
                alt="Креативная команда"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
            </div>

            <div className="animate-fade-in lg:order-0 order-1">
              <h2 className="text-5xl font-bold mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "Lightbulb",
                    title: "Креативный подход",
                    text: "Каждый проект — это уникальная история вашего бренда"
                  },
                  {
                    icon: "Users",
                    title: "Опытная команда",
                    text: "Более 50 успешных проектов в портфолио"
                  },
                  {
                    icon: "Zap",
                    title: "Быстрые результаты",
                    text: "Первые результаты уже через 2 недели работы"
                  },
                  {
                    icon: "Award",
                    title: "Гарантия качества",
                    text: "Работаем до достижения ваших KPI"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты работы с брендами из разных сфер
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/e484f1f3-e6d4-4ac3-84e5-3fd37c60483a.jpg",
                title: "Редизайн сайта TechStart",
                category: "Веб-дизайн",
                result: "+320% конверсий",
                color: "from-primary to-secondary"
              },
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/da079537-08a3-4ed7-b937-74414fc33dc9.jpg",
                title: "SMM-стратегия для FashionHub",
                category: "Социальные сети",
                result: "150K новых подписчиков",
                color: "from-secondary to-primary"
              },
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/e5ed933d-a435-4c8c-ac60-efb121f5a8ca.jpg",
                title: "Полный ребрендинг GreenLife",
                category: "Брендинг",
                result: "+280% узнаваемости",
                color: "from-primary to-secondary"
              },
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/d2f74689-643d-467e-9126-46568f22483b.jpg",
                title: "Таргет для EdTech платформы",
                category: "Реклама",
                result: "ROI 450%",
                color: "from-secondary to-primary"
              },
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/239c3892-fd46-4bdc-9f43-9fe54032e473.jpg",
                title: "SEO-продвижение интернет-магазина",
                category: "SEO",
                result: "ТОП-3 по 50 запросам",
                color: "from-primary to-secondary"
              },
              {
                image: "https://cdn.poehali.dev/projects/d9a6668b-6561-43d9-ad2b-79740cc5a40d/files/dcad690d-7a54-43c0-b0fe-89dbcd7bfc0c.jpg",
                title: "Видеокампания для стартапа",
                category: "Видео",
                result: "2M просмотров",
                color: "from-secondary to-primary"
              }
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <Icon name="TrendingUp" size={20} />
                    <span>{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              Смотреть все кейсы
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Начнём сотрудничество</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>

          <Card className="border-2 shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                  <Textarea
                    placeholder="Опишите, чем мы можем помочь..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6 group">
                  Отправить заявку
                  <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CreativeHub
              </h3>
              <p className="text-background/80">
                Маркетинговое агентство полного цикла
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background cursor-pointer transition-colors">SMM</li>
                <li className="hover:text-background cursor-pointer transition-colors">Реклама</li>
                <li className="hover:text-background cursor-pointer transition-colors">SEO</li>
                <li className="hover:text-background cursor-pointer transition-colors">Брендинг</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-background cursor-pointer transition-colors">Портфолио</li>
                <li className="hover:text-background cursor-pointer transition-colors">Команда</li>
                <li className="hover:text-background cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@creative.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 CreativeHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}