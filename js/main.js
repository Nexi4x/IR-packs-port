// ============================================
// ДАННЫЕ О ПОЕЗДАХ — ЗАМЕНИ НА СВОИ!
// ============================================

const trainsData = [
    {
        id: 1,
        name: "Электропоезд ЭД4М (РЖД)",
        category: "electric",
        author: "Zeotq",
        description: "Пригородный электропоезд ЭД4М в окраске РЖД. Пассажирская модель для маршрутов постоянного тока.",
        image: "images/trains/ed4m_rzd.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1CrxANX4VQJ5dwu7K2x8sOl0_7SwfT8KK/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1dw2XeQzpXOBNpNByXYkEv24gjXJ6oinz/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1OF2XLlp3Gjg5-sFi-Le7-BqPlUtLTJ0U/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1S3uPYUOHJ5_k5GEmWhg2RdNapb18k8OV/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1l8p6jg-hxW-buF5KRQTFhxotJmhTpik9/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1e_VLMsUVDf_bWs3cJgqkZkyol53BmmuU/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1rM678gi2MYypRv2nexAS9WFLbKdyqm9h/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1_CVBAOA1zZT-z6i-b6x1BZg0l6HCVQEu/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1s6FdgM1k6V9BMvpoX-63AFWi7sd_ECsg/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1s3VOKBo_dtCVANfRoxbav1Z7Et9EBANg/view?usp=drive_link" }
        ]
    },
    {
        id: 2,
        name: "Электровоз ЭП1М",
        category: "electric",
        author: "Неизвестно",
        description: "Пассажирский электровоз ЭП1М. Используется для вождения пассажирских составов на переменном токе.",
        image: "images/trains/ep1m.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1czp32fvVQlcthzTGT7RJAMm3y7qCDnRA/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1ECyetVWGgkezxK7yCqUvnM0U_J6CF5My/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1_uNRVcGvSTG3slQ3ONqbOHQXu8C3S2zk/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1wYKZF2lHV5ATfY5j6NWEh4MzjlqK6Spc/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1kebxyJVgFUSYma88_fng1k9fMoglm83g/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1bxM3Ayjtmh3ntRR0bNKXsR0aBZnTfz8u/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1Z15VI7HOu3cpX4kDU3rLsP3HQwlUYgJ6/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/15tjeodkUApbn87OIBorELTPdoGMtJnTP/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/19TcXTFil9M-1GC2CLresILxzI8QdfIfm/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "178 MB  Google Drive", url: "https://drive.google.com/file/d/1lROB0vnEHFz2kow9-NnH1I_0OZW9ITm1/view?usp=drive_link" }
        ]
    },
    {
        id: 3,
        name: "Электровоз ЧС6",
        category: "electric",
        author: "Ghost",
        description: "Скоростной пассажирский электровоз ЧС6. Версия v0.1 by Ghost.",
        image: "images/trains/chs6.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/19M4cH9UQIHsqMicO32wpMHxScAweTapi/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1_Qxr9YP64N7fAeSoGgK3Wc6qeAjAe1N9/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1i-cpEe-xXT7azZAqQrAnzkjlgKhp-s3h/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/14KcAJvPw_z5cn14TbfkfU0q2lqYJXGOg/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1fE1G2hAgX8HygypLWe0C53n6H44RVt5S/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1MEYIWTe9yu6erAXqHFHeVstG1Sukub3C/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/17HTEgO4i2JGWrue0PST9r2Cu4HC1rWfo/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1suD935iF3pF0nQ6Eho_an5SpTTYbeIQe/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1Jy1ous0o_L6gum632fWIgn7kcizXIB54/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "135 MB  Google Drive", url: "https://drive.google.com/file/d/1gILPHh2osbXYGp-VWTYZwUZJr6uqWeTj/view?usp=drive_link" }
        ]
    },
    {
        id: 4,
        name: "Тепловоз 2М62",
        category: "diesel",
        author: "Timoha x 254 Кран",
        description: "Двухсекционный грузовой тепловоз 2М62. Модель by Timoha.",
        image: "images/trains/2m62.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1TYn_HTfyalpjj1tq3c8dZ81NndmH7vxs/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1sRdoGt1ld1BiqEpq_4rp9j93pE36m9Oi/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1fpYRzZe_WhmHybiX0ClRZGtAju1bYcHU/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1SgXjc66vyny71jbMlTt5Fy0DPrHIf1rK/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1rvK30Q2UUPbGzDQir5DmPa7INVdD-kTL/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1L-WIJZ9x3BupkN2MK0AFADa6EfYDvgth/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1PdRpeIvKXqF5Xll4_zC98ajJoARp9e-W/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1rlK_Baugg2tFdhRUvpX52sQgn2e8-eHu/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1wwNZb_uKk0AJZPV18uFt6Qk4_1T3Rkaj/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "93 MB  Google Drive", url: "https://drive.google.com/file/d/1AEvZ8Wo09cQQ55W-EhjjbMdEwg3h782Y/view?usp=drive_link" }
        ]
    },
    {
        id: 5,
        name: "Электровоз ЭП2К",
        category: "electric",
        author: "254 Кран",
        description: "Пассажирский электровоз ЭП2К постоянного тока. Один из основных пассажирских электровозов РЖД.",
        image: "images/trains/ep2k.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/16gGjdPpqfbcvdqr6xgC3FXfjP6xqPhJp/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/11UuuaNOzaB62KztuoOMLxom7QdJ7EZlS/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1GHlfr9UBSBcB3_RUaquj_AYj1NpcCjmK/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1DG0k6U2oskcX4Cuj4TkoqodTrbrWU4EY/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1RNM7YiNZzGS22Y-78EDDS_rXB6lxks6U/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1By2y0kDcwxMOQnXkQG4tvvX6wnJMkCwJ/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1BX_HdavAtkaNZslOppu0aK0YlbO7IvHZ/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1eVw-UjHjRZ2VqJ1ro-M8AGO6cZlpWdwO/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1ndFzOJwAidxGCJh0cJIid3qbAQLLKj6x/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "86 MB  Google Drive", url: "https://drive.google.com/file/d/1N4g2iLkRe7eoaMPMZ-JyfX96ZD5dG4Hl/view?usp=drive_link" }
        ]
    },
    {
        id: 6,
        name: "Электропоезд ЭР2",
        category: "electric",
        author: "PROIR_MC",
        description: "Электропоезд ЭР2. Классический советский пригородный электропоезд.",
        image: "images/trains/er2_1122.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/15MmRyynlsZsgZCCGlJ449kMnAJ5xCkKT/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1wcGQBEItPCEFPcRV4yAp39LhBtYvX3qL/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1CkJzPmHWOMQzjrFE8aaufJ4PMndrJb1r/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1026hDD3-4jXi-rDR7bWFrQn0mGBkglMY/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1026hDD3-4jXi-rDR7bWFrQn0mGBkglMY/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/12bxgdVpc7WtNy_98hN_Q4noJ52KYyE4p/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/12bxgdVpc7WtNy_98hN_Q4noJ52KYyE4p/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1iuemckRbbd6o6U-tW4gJnyhLijDo3Uf1/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1rHS0tAZbtdAo5VkuEtfFjZkoAJTkHlPu/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "83 MB  Google Drive", url: "https://drive.google.com/file/d/1rHS0tAZbtdAo5VkuEtfFjZkoAJTkHlPu/view?usp=drive_link" }
        ]
    },
    {
        id: 7,
        name: "Дизельпоезд ДТ1 «Торжокский»",
        category: "diesel",
        author: "Limpiks",
        description: "Дизельпоезд ДТ1 «Торжокский» в ремейк-версии. Подходит для пригородных неэлектрифицированных линий.",
        image: "images/trains/dt1_torzhok.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1psrlFyLFK8zThd6BwTs69i7A39MIFQn3/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/16Dz21-DmAiUuELQGtPuJHoOqqvnGnXka/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1GxOjJBxNaiGgJgfeThWP7UTcqLHM-lro/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1ZJRFch5XxOqmpMZC4JaKqDbuVfq4KPRG/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1b6tWqBCiQy6-BC2odtyaXGneHVwLe29W/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1kC-RtUn75QROC4pGdAl9dRN8t1t-nyrI/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1-FAT8PHMVmDectWoFXSCT4oLm5aDixRl/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1YXcsP8bGfKhUmp0Q-aC-5D97CHzjxnrP/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1nfIChiCoVPcw3kmhNT2Ibj3cMK05RgPX/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "81 MB  Google Drive", url: "https://drive.google.com/file/d/1nfIChiCoVPcw3kmhNT2Ibj3cMK05RgPX/view?usp=drive_link" }
        ]
    },
    {
        id: 8,
        name: "Электровоз ВЛ10у",
        category: "electric",
        author: "254 Кран",
        description: "Грузовой электровоз ВЛ10у. Модель от 254KRAN.",
        image: "images/trains/vl10u.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1rsc9mqhyXQ8gMNRBabzJj3PivY_6a_p3/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1TkG0Hixsay3f8-wamlCHkVGGsMwAGBvs/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1_tNDkHm_BoblNH-OpDLQYkyR0FejEaCK/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1868g4KPgSZIrGGXCY4J7Vhqbfjdm0E1c/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1y48ivqtbEiV_Yjcpo1Kch8-aHpY2a5wA/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1z3GTUhzvVqLt7DKz_GRcQHUsCKjjOzQV/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/11vKJD7RXZl6H2ovSQENnLmMwxXoG-v4i/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1ejv1Ien9_vmuBZjQhK-6pcU9jYb5UYFJ/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1RaEoyaUa_Ao7CMtTi66JiPLItOhgQVkL/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "76 MB  Google Drive", url: "https://drive.google.com/file/d/1oPoK7tZEIhGucQyxnrq6PPnD4NjyfgZL/view?usp=drive_link" }
        ]
    },
    {
        id: 9,
        name: "Электровоз ВЛ10у-574",
        category: "electric",
        author: "254 Кран",
        description: "Электровоз ВЛ10у-574. Модель от 254KRAN с индивидуальными особенностями.",
        image: "images/trains/vl10u_574.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/14F81z0Obs6cjlZxhMkBuuKl5wjVuI15S/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/14F81z0Obs6cjlZxhMkBuuKl5wjVuI15S/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/14F81z0Obs6cjlZxhMkBuuKl5wjVuI15S/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1lYzlR-QX5ompjST1_udPg8vZ2X_wwNY4/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1PHDfAxHTA0Lvy_r1xqH7UJ2TMeZ3j-E5/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1MMllx2979WCqzz9e7U_JokmBE7u_qQeW/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1MMllx2979WCqzz9e7U_JokmBE7u_qQeW/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1_r9TijEWZKon5diWztXOnOxMGftlc9Kq/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1BR-J-BcYF5MQmWzjFSU7DDqt5IcJT6NT/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "33 MB  Google Drive", url: "https://drive.google.com/file/d/1DtRz9rWiwPg8Hpde7jXKEgfsrgrazXTe/view?usp=drive_link" }
        ]
    },
    {
        id: 10,
        name: "Тепловоз ТЭП70 (Коломентепловоз)",
        category: "diesel",
        author: "Limpiks",
        description: "Пассажирский тепловоз ТЭП70 от ПАО «Коломентепловоз».",
        image: "images/trains/tep70.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1yuVxI8lSn6uLlWUDgXcaOvBRqyc2Wo2U/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1JwWH11mxC8BvuHARITngxabmeZLfo9XB/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1EFKtryldtumrsq4BhgiUOj3AHx2PIozC/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1QqSBXo7RfQFcpA52pesG3A5uXaMljeKH/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/12z5KG4aFXZkhHSTfYmpI5uRMrThaYZED/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1_0a1vhGVmMMaW9tAVtdfcWjAaRJdqAzW/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/19QwIqh1_vz-UE_3SuZCaxQW7Q0uV_HQ0/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1fCLlIy8GsdIEp3KgNHEYBwSBHEMpz12P/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1xVBrqgkF1Nz52afIDOCTatfLpNij0Prz/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "71 MB  Google Drive", url: "https://drive.google.com/file/d/1WXBk20eVNFfyDO5o7avD_Qk-ljmI60rw/view?usp=drive_link" }
        ]
    },
    {
        id: 11,
        name: "Электровоз ЧС7",
        category: "electric",
        author: "MTS",
        description: "Пассажирский электровоз ЧС7. Модель MTS.",
        image: "images/trains/chs7.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1RpfSu4F_hiB3jrQ1A6ot8ymVeeIcp3Jb/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1hOWCTFcyxpa7gt5FNb-LwFlE6R8ZcNaa/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1DtZ1OHpWrcBBqbGUx8RiHKpAWGJ4A5lD/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1SA8nNeahjlHl6b0NeX_Zl88t03H-m4kH/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1LpHnyX4L9M_oiQSZE-3TI32xD3rWVQtE/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/15k68ki0y1R2d0GtLiCwU9ZdEtCJtH_pC/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1liCoBN9ofXwAwspgpZuB_sH62i2lX3Xr/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/18ko_PGq7uZYGkjXObiN0EPUpb22xdpWl/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/10ddBIzb7Xo7we_zyNj4qCKoxOGSAHKGM/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "63 MB  Google Drive", url: "https://drive.google.com/file/d/1gLOK4szCimJ4VDRwQHKiI1Ewvd_FCeQJ/view?usp=drive_link" }
        ]
    },
    {
        id: 12,
        name: "Электровоз ВЛ60К (НЭВЗ)",
        category: "electric",
        author: " ДС = Украинские Ж/Д",
        description: "Электровоз ВЛ60К от НЭВЗ. Грузопассажирский электровоз переменного тока.",
        image: "images/trains/vl60k.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1NNzF2LjeKY4NCyM_o48y8hG9aVRsbdVL/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1dXX4MKRkmDmMC-MUABd6e3g1W2ORI50O/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1yF2C98VquMHaF1GLuo1OBBanzm6g1BqJ/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1iBw6Flt1ezuvt-FoCUTX35Kk-oud0Kwv/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1L4KkD2M6JVauznkH9cqQe5DoxbLVWFZM/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1D3GcSi2ridnGfb4BCAi8Zp9MfxLb4BQA/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1JqVSD36Rpg5xGWbDRJsmV_Fq5F0nGI61/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1yCkyHFuVpQNBOK4tsIWAmSu8R0-_ZtsM/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1_QOYzYS6r9_Tyl_fc3WPjp5sYL7T4Xoo/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "40 MB  Google Drive", url: "https://drive.google.com/file/d/1iqfadViz3cgYWTtSxVyi6w5zrEdbFgF4/view?usp=drive_link" }
        ]
    },
    {
        id: 13,
        name: "Маневровый тепловоз ЧМЭ3 (Škoda)",
        category: "diesel",
        author: "UkraineRailways",
        description: "Маневровый тепловоз ЧМЭ3 от UkraineRailways.",
        image: "images/trains/chme3_skoda.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1YA86H_qhXG9HF5VDF4ZPhlX4NDpgpU2e/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1gNXwUrqpGM71Zsg5dTW17X0VAfn4BV4W/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1KeGUS_Vo9cH67e3BC2SoFMaA2jod4Yda/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/17Ncu9GtT-M-ZQhxXTZL9PbGMeufoGYiJ/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1vTtvHzyMIUEOdsGZPq6Ov0-mqKtswnwu/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1AVmyDFX51-yDcWGUnvC1Trxgcf-Oien_/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1JpG04Yv6wD4Hee4CMqhFiduix64vsMoc/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1sr4h7Asr4_-Z487SxOgTY70vazHoudtG/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1v-aNn6LhM7z2mLPLo7tYN4MzYxovKHG4/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "30 MB  Google Drive", url: "https://drive.google.com/file/d/1L3T0xJk1ro2P6IwuQmlJQY-1NKtoBBzC/view?usp=drive_link" }
        ]
    },
    {
        id: 14,
        name: "Тепловоз ЧМЭ3 (списанный)",
        category: "diesel",
        author: "Неизвестно",
        description: "Списанная версия маневрового тепловоза ЧМЭ3.",
        image: "images/trains/chme3_old.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1DY9Ig8P7TckpZvd_3Ewl97uDtkbvft07/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1798jiOJ0Kc2ud-iX7fIizV4SphG3rilW/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1c5jIEShBcn_3_wNdNClFwdpRSn4KhLRo/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1GpB2AMUAmHEmD646GePmshNuZX94jDub/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1z7u4cKtdtSYCGocFVYqJJNSWUUNSxXsO/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1bZZ91XdXDQYRehnPophfBHCpfuwpjEO2/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1A8hWQ1bnFJUY2A0rW7MtpkHBJk_4Nh09/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1NiLdzaqELyy69oWOxbaKp2JVX38rFNNx/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/113Tvrbr8PnOYGwxds-jwYoiEbCWESnZu/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "1.2 MB  Google Drive", url: "https://drive.google.com/file/d/1VsIInvup2VNbY5LS6LPSLmVAQCnNz1Al/view?usp=drive_link" }
        ]
    },
    {
        id: 15,
        name: "Тепловоз 2ТЭ25КМ",
        category: "diesel",
        author: "Dark_Angel",
        description: "Грузовой тепловоз 2ТЭ25КМ. Модель Dark_Angel.",
        image: "images/trains/2te25km.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1OUX7CnlsbxDciyr84ID1FL_DZsDhUfMh/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1XfMnMyL3gL15jIyV_4hsjZdNq58XwkeL/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/13tEQwrwR3S1lHdhOCNCB9AIM2AWy0wO3/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1OelTNnIU9i9gsm0YGjSJue4-H0D59ZAb/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1fPx2t9uLlmElvKureqshL44Ol0CelUw0/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/13V73d63OUup_VRzPg21I70SHBmkIlM9e/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1h7684YjFqk097ryhDVCPj3Eifke5K0cR/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1M47GeOdjHL-N3UWTFhJZ71WjA6zT9psl/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/18Jrrs5DCkxgKsb917lTtbHIuVkC_KqTB/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1x6KfnoqgWc1554_83awUd39tdEF1JXiQ/view?usp=drive_link" }
        ]
    },
    {
        id: 16,
        name: "Автомотриса РА2",
        category: "diesel",
        author: "Zeotq",
        description: "Автомотриса РА2 для пригородных и малодеятельных участков.",
        image: "images/trains/ra2_090.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1d6cS66sm75w9bm6QFyllaFujl3d8Tl4x/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1nxiCMBiQUH_5Pd6n6Q65SKFucB2Ow9GH/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/11G7_dwm8kSZDtTDQcv0JVbKlO1FrvbT_/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/10u63vLH9UP7EripQ2OvFQrRfgGuZ1m_N/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1rBfyDlVyRi4mowc3LKlqo9GdN9sF-9gl/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1upTGPJM3mlXvtRLLWVC0aydp8Ow5Ky4u/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/13D6oEHTEvQDyw0yasdl3uM2lVlT8qFjz/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1mX-OCQqmLy_dlX0uCMuXUP_-CLNSQFrZ/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1WWGfBLWxkyNJqJDoewJcnhWEvSFoFEPW/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "9 MB  Google Drive", url: "https://drive.google.com/file/d/1qoVUK09w9f7pcFRkk9-tnvxfrqKFBKlG/view?usp=drive_link" }
        ]
    },
    {
        id: 17,
        name: "МВП-ИР (межрегиональный пассажирский вагон)",
        category: "passenger",
        author: "FrozeRain",
        description: "Межрегиональный пассажирский вагон МВП-ИР. Модель by FrozeRain.",
        image: "images/wagons/mvp_ir.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1yn3XRjJpuyBcOGZAu873kz5oUl6C_zOu/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/195Sy5jeq0TQ4M_p2yGQoQhZ_iGlnMCPv/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1ig0I2eiL9s6TcAi90kV0cuuVUQ3QTTOm/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1fdmkllElZ3t_tgqXsUf4zUqNo2_rSLth/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1fjiil4AA_cTgjsKsErsAxJr3bQcW1QYm/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1wPPtUYUgFzOhh3-8Z176ou6hIPVr6Bmd/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1JoMki_BZ7u25Pbk_sAV3rgqvzWgpp3_7/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1ptjBJc9J-aJxIRbRLL7cFwOUS2_nxFlY/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1JpCe1jEqeaLa-UmJYHK1o_Q4k5k6msRA/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "75 MB  Google Drive", url: "https://drive.google.com/file/d/1IuX6yVhSZYys4HpvHv3L-eCfEplsAxM3/view?usp=drive_link" }
        ]
    },
    {
        id: 18,
        name: "Полувагон 12-119",
        category: "freight",
        author: "UkraineRailways",
        description: "Грузовой полувагон 12-119. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/half_wagon_12_119.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1eDFvpCeeH8NEujyOqT2n20Mwo2oBszzq/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/16D0QRP1v94WjKnpzOhhuQHRaJ-j1V5TI/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1z9fKxPn34rAbw7ay6Y4qKDuDdKHQpt9Z/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1z2fG78RcOsiqVxubA-eoTSz4NSjYt6zt/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1zsZ4W3O85sQeSjJGtoUAXulnRhBVmCa3/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1T6kNI1lkiCvpQ02pHOMKG2FHHagcCZ5_/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1wWx7Mi569tL6ZKLGCcACM5pn6R7_DsLd/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1V_XwjmL9ygnzKAuF1fJpxUJAAvETTv4j/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1cqsA1i-SnAszWziNSxgR1DzYlc9vRc53/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "32 MB  Google Drive", url: "https://drive.google.com/file/d/1MxiMcxkJdpwm1i84glPmAFI6tUIdEou1/view?usp=drive_link" }
        ]
    },
    {
        id: 19,
        name: "Крытый вагон 11-270",
        category: "freight",
        author: "UkraineRailways",
        description: "Крытый грузовой вагон 11-270. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/boxcar_11_270.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1JIY6WbQfYr-bnrRnpO03aEWQ-Sir0jVZ/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/13jbKy5LHWzv0J6adpbcptrwhS2uLiDAK/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1Vp_Y1xoipFojkA3BjVk4REDShfRNszn5/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1LXdzPIJvYPML99b532ZKHnBaAeWptL4I/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1lAcghd3s2SAJ7YDsODNtlXop7jW-3Gh0/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1LS-bqTGeEnxHhfcia66RLc4R2w5KPUdK/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1EnggvVZkjNNfnFkPEi6T0yrHO2agkGDk/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1LsosCHT153hLCYBthkO0OWFsY3hnaeYZ/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1s5-q6jvAq6cI8-SYWB5CyE6x19CcI3Wj/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1jlf0FbxlbeMIYrKLASF3Q4AFExI4gNjC/view?usp=drive_link" }
        ]
    },
    {
        id: 20,
        name: "Цистерна 68 т 15-1566",
        category: "freight",
        author: "UkraineRailways",
        description: "Грузовая цистерна 68 т модели 15-1566. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/tank_15_1566.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1H3yZ8b5Awd-DZ91UoopT6arnFH8DgqpR/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1yh_jycPceu3ir92_5ejhGTT2nlQur6Hd/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1Ju6TxWcLwhsCoRe2F6GiNTbFX1veDk1c/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1sdCY5GlUB8C4HppyukzMepfutBhkz7kw/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1ANFxS8HdpYb9cPvZ-N8yD0K8u1loSqvf/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1PZcqrgzDbE8OeJ8DOWev6kO04mBUAP5Z/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1RdzBj-z8bB1QqKAWRtsY6oWtUp2eQlkk/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1vqyW4xN9m_zaTrkjxm5O80y0QRlS1GX6/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1RC_tb1sCkAVMjAgp2lGbhpOwB8XiG0Bj/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "17 MB  Google Drive", url: "https://drive.google.com/file/d/1Idd8QVNFeGIyshOpFsNZHzjPCQ7QZnJo/view?usp=drive_link" }
        ]
    },
    {
        id: 21,
        name: "Хоппер 19-7053-02",
        category: "freight",
        author: "UkraineRailways",
        description: "Грузовой хоппер 19-7053-02. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/hopper_19_7053.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1l0zIZUC4Jtj6ss21YQ6u-Mhn-6iHvLJv/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1NQ2rZ-ZxkYzyVDun0vLEew6KFxxHs1bY/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1HQXFga5r8N_Jl3KlkygKQnYzb89nso78/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1M6QF54PRbG9B0n6Z6XEv43wUNR7xZ5Nf/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/12R3s1QRy48Xw5hWDMje-oUBDuVnWB_Sc/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/11oLCchI7FRyVFfuRA1F8UJlaCjqUcqMp/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/11HzTQks_IDw18w9C5JQq8bd8dQEtldi9/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1E3nF03nvLuUt973nPxatgakeoNHhPMMC/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/17BWWQcFWzGQZrMmPeeyrdtpwi_BZQ1TY/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "11 MB  Google Drive", url: "https://drive.google.com/file/d/1Emu3mAugkXIOsEmg1tqn7uWO08lk07SK/view?usp=drive_link" }
        ]
    },
    {
        id: 22,
        name: "Платформа 13-401",
        category: "freight",
        author: "UkraineRailways",
        description: "Грузовая платформа 13-401. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/platform_13_401.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/1d67S5qmiUkOjhCmBoQ_jIEntOmaVAJYG/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/18Boj6h3S5TOu19we5kFH6sc3-40vEDZC/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/181YSxU62KgNPWKUlGi5QG_ctOshebyJ6/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/15UFEsc2XC30ks1hS_Nd4Frf2nBzc-mqI/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/1ZxYHJLYBNNUN7SGlnUhqbVJ8gy4GrSsl/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/171yY6E2alwVFqPQ1CjK4QPu41TenndM1/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/19aauBc5Ch7SrJlWa34KM0Yk74VwPuvfT/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/1nx2DcJYPRttaTYMEFyv3qhkE9OAEbDq2/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/1RoaTU9z1zcQBdXonLFu6n5VfSft49Oto/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "8 MB  Google Drive", url: "https://drive.google.com/file/d/19qNxqE3LJg16CJRTKcc36XOprEMlFm0B/view?usp=drive_link" }
        ]
    }, 
    {
        id: 23,
        name: "Вагон-ресторан «Невский экспресс»",
        category: "passenger",
        author: "RTS",
        description: "Вагон-ресторан состава «Невский экспресс». Модель RTS.",
        image: "images/wagons/nevsky_restaurant.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1CTzIKWnxCm5d3LaI2EhzifsFZQOLu_bk/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1wzotEfvDhhIWqNCGIrgrnHSDh0v6ZLJs/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1YK_eu545KWO-zD6QlAKkGOVVe7WViw0v/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1CMJYEpSpklgBfHm43AcZZ6ZKDifNOy0N/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1yj-Nyct3SygLFu5MFuxgrzyWdawZBGbl/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1vfpSN5ARl-s6axUHpOOnCADty3hMLwmB/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1YbErOHR6SYx7_nYp5K3HGLGKIEHvYz--/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1Z-TGq1tRcrAUnHgk1ZmBb7WuMhDmC4ZU/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1-Fq2AoqWp1Iyiqc8WUw6c-JYIa3HUyOo/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "14 MB  Google Drive", url: "https://drive.google.com/file/d/1uC0SDQSlwNRQRIIzXslqHk7Ou-dg80m5/view?usp=drive_link" }
        ]
    },
    {
        id: 24,
        name: "Вагон 2 класса «Невский экспресс»",
        category: "passenger",
        author: "RTS",
        description: "Пассажирский вагон 2 класса состава «Невский экспресс». Модель RTS.",
        image: "images/wagons/nevsky_2class.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1ac3LkhxRC7bESsHsgY-WledF9u1h_Y0D/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1xYlxOpqbQc30KNJ4BNbaUuHD4n99e7Wy/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1Wycko6dtXkGLvSGMTr9VBU4cLkd2XkoL/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1MkWVjBQo5enKhBlhW2IDJVn0cyqwn1R4/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1hre3gRhSJmRaorUkzn3IAf0dlzBL3Kf6/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1ZFYi4PQwx8Y_RoZslNAcd70dy2TxB0wN/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1Jgjmf4h02sYKMkxfo0K9J2Fu-lfFTae7/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1jJQFB7GLS7wdBLQaNW4u_qgdMhdAjjji/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1IFDxKVDFkQatt4fmfSI12DoztvXA-Sda/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "7 MB  Google Drive", url: "https://drive.google.com/file/d/1zSWDZW3RtpvCc8TEMF6Ynel-Tw6npguL/view?usp=drive_link" }
        ]
    },
    {
        id: 25,
        name: "Вагон РИЦ",
        category: "passenger",
        author: "RTS",
        description: "Пассажирский вагон РИЦ. Модель RTS.",
        image: "images/wagons/rcc_wagon.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1wpkCZt2SwcgCv8TncB3HOAsJY1pG5I3G/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1PEZt_QwK554E4RvLeUgMuL7tDMlXg2Ku/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/104y_qF5Ap511WdO9nE9WTk60toKJBy-p/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/13mmNhU87Z8oOLYhQw5LtyDH9VX4_KV9F/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1O2Ow-jFc3SnmvTlIm8bm7iFuRlYpriSt/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1O11nPQDXx000Lfi640OMhK7J1ajdSlrP/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1X7s4aT-YeUcvRe1_fatjeoyj9fxjya3Z/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1EDB6fJwBxHxNcTOpXLE_6MM-9oywt0Ap/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/142DsFwSUvDBhsr9h1t49gLVfzV0R5bCJ/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "20 MB  Google Drive", url: "https://drive.google.com/file/d/1H4SezNIE8GLIfW-6aKr4xP2Lnagv69iK/view?usp=drive_link" }
        ]
    },
    {
        id: 26,
        name: "Пассажирские вагоны «Аммендорф» (старые)",
        category: "passenger",
        author: "RTS",
        description: "Старые пассажирские вагоны «Аммендорф». Поддерживаются все указанные версии Minecraft.",
        image: "images/wagons/ammendorf_old.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1VxFqUSiTvnyiX5qHVzYy9DQJ6rJz7ylP/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1JLoNr1zF0uG2_PqnPjA02UX_vngESnpU/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/13AtaflRgA1_y93Z7WH4EMipqP8fbUWaG/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1o_twADwpkFJcpEesnMzQ4Hl5gfZJ0cz-/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1Wz0y6vhFHKXUy1j2mImYbyAvJi5SKvNe/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1m2lB47IR_NbYU34ZiaIJKFza6wYyjqiG/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1WoHHOlvKidDyCb0sG_op1c5Jq9qFxhvN/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1lQTx1OvAeyWJa0hbMfKRpbQRxVxbJwlq/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1dP0kqof5Wu2Hhm9FlgXvTrTxU9uhnEew/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "3 MB  Google Drive", url: "https://drive.google.com/file/d/1OSBAgaam8LWwgR7mCNLXFXgK-q6AQCFU/view?usp=drive_link" }
        ]
    },
];

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initBurger();
    initFilters();
    renderTrains('all');
    initModal();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
});

// ============================================
// ШАПКА И СКРОЛЛ
// ============================================

function initHeader() {
    const header = document.querySelector('.header');
    let ticking = false;

    // ИЗМЕНЕНО: скролл через requestAnimationFrame вместо
    // прямого вызова на каждое событие — меньше лишних перерисовок
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// БУРГЕР-МЕНЮ
// ============================================

function initBurger() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// ФИЛЬТРЫ
// ============================================

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderTrains(filter);
        });
    });
}

// ============================================
// ОТРИСОВКА ПОЕЗДОВ
// ============================================

function renderTrains(filter) {
    const grid = document.getElementById('trainsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? trainsData
        : trainsData.filter(train => train.category === filter);

    // ИЗМЕНЕНО: собираем HTML одной строкой и вставляем одним
    // действием — вместо 28 отдельных appendChild+reflow
    grid.innerHTML = filtered.map((train, index) => createTrainCardHTML(train, index)).join('');
}

// ИЗМЕНЕНО: локальная SVG-заглушка вместо via.placeholder.com
// (сервис мёртв, картинки битые + лишний внешний запрос)
function getPlaceholder(name) {
    const safeName = (name || 'Модель').slice(0, 30);
    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220">' +
        '<rect width="400" height="220" fill="#1a1a2e"/>' +
        '<text x="200" y="115" fill="#667eea" font-family="sans-serif" font-size="16" text-anchor="middle">' + safeName + '</text>' +
        '</svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function createTrainCardHTML(train, index) {
    const categoryNames = {
        steam: 'Паровоз',
        diesel: 'Тепловоз',
        electric: 'Электровоз',
        passenger: 'Пассажирский',
        freight: 'Грузовой' // ИЗМЕНЕНО: новая категория
    };

    return `
        <div class="train-card" style="animation-delay: ${Math.min(index * 0.05, 0.5)}s">
            <img src="${train.image}" alt="${train.name}" class="train-image" loading="lazy" decoding="async"
                 onerror="this.onerror=null;this.src='${getPlaceholder(train.name)}'">
            <div class="train-info">
                <span class="train-category category-${train.category}">${categoryNames[train.category] || train.category}</span>
                <h3 class="train-name">${train.name}</h3>
                ${train.author ? `<p class="train-description"><strong>Автор:</strong> ${train.author}</p>` : ''}
                <p class="train-description">${train.description}</p>
                <div class="train-versions">
                    ${train.versions.map(v => `<span class="version-tag">${v.mcVersion}</span>`).join('')}
                </div>
                <div class="train-actions">
                    <button class="btn-download" data-train-id="${train.id}">
                        Скачать
                    </button>
                    <button class="btn-info" data-train-id="${train.id}">
                        Инфо
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ИЗМЕНЕНО: один делегированный обработчик на сетку вместо
// 56 инлайн-onclick (onclick="openVersionModal(...)" больше нет)
document.addEventListener('click', (e) => {
    const downloadBtn = e.target.closest('.btn-download');
    const infoBtn = e.target.closest('.btn-info');

    if (downloadBtn) {
        openVersionModal(Number(downloadBtn.dataset.trainId));
    } else if (infoBtn) {
        showInfo(Number(infoBtn.dataset.trainId));
    }
});

// ============================================
// МОДАЛЬНОЕ ОКНО ВЕРСИЙ
// ============================================

function initModal() {
    const modal = document.getElementById('versionModal');
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    closeBtn.addEventListener('click', closeVersionModal);
    backdrop.addEventListener('click', closeVersionModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVersionModal();
    });
}

function openVersionModal(trainId) {
    const modal = document.getElementById('versionModal');
    const train = trainsData.find(t => t.id === trainId);

    if (!train) return;

    document.getElementById('modalTrainName').textContent =
        train.author ? `${train.name} — Автор: ${train.author}` : train.name;

    const versionsList = document.getElementById('versionsList');
    versionsList.innerHTML = '';

    // ИЗМЕНЕНО: собираем список версий одной строкой
    versionsList.innerHTML = train.versions.map(version => `
        <div class="version-item">
            <div class="version-info">
                <span class="version-number">MC ${version.mcVersion}</span>
                <span class="version-size">${version.size || ''}</span>
            </div>
            <a href="${version.url}" target="_blank" rel="noopener" class="btn-download-small">
                Скачать
            </a>
        </div>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVersionModal() {
    const modal = document.getElementById('versionModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// ИНФОРМАЦИЯ О ПОЕЗДЕ
// ============================================

function showInfo(trainId) {
    const train = trainsData.find(t => t.id === trainId);
    if (!train) return;

    alert(`${train.name}${train.author ? `\nАвтор: ${train.author}` : ''}\n\n${train.description}\n\nДоступные версии: ${train.versions.map(v => v.mcVersion).join(', ')}`);
}

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // ИЗМЕНЕНО: отписываемся после показа
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// СЧЁТЧИКИ
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ
// ИЗМЕНЕНО: обработчик навешивается один раз после
// DOMContentLoaded (в init), а не в момент парсинга скрипта
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // заглушки "Как установить" / "FAQ" не ломают скролл
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
