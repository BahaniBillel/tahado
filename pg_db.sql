PGDMP         4            	    {            tahado    15.3    15.3 W    c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    24669    tahado    DATABASE        CREATE DATABASE tahado WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Arabic_Saudi Arabia.1256';
    DROP DATABASE tahado;
                postgres    false            �            1259    24794 
   categories    TABLE     �   CREATE TABLE public.categories (
    category_id integer NOT NULL,
    category_name character varying(50),
    parent_category_id integer
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    24793    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false    233            g           0    0    categories_category_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
          public          postgres    false    232            �            1259    24724 
   orderitems    TABLE     �   CREATE TABLE public.orderitems (
    item_id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer,
    subtotal numeric(10,2)
);
    DROP TABLE public.orderitems;
       public         heap    postgres    false            �            1259    24723    orderitems_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orderitems_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.orderitems_item_id_seq;
       public          postgres    false    223            h           0    0    orderitems_item_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.orderitems_item_id_seq OWNED BY public.orderitems.item_id;
          public          postgres    false    222            �            1259    24712    orders    TABLE     �   CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer,
    order_date date,
    total_amount numeric(10,2)
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    24711    orders_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    221            i           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    220            �            1259    24770    paymentmethods    TABLE     �   CREATE TABLE public.paymentmethods (
    payment_method_id integer NOT NULL,
    user_id integer,
    payment_type character varying(50),
    card_number character varying(16),
    expiration_date date,
    billing_address character varying(200)
);
 "   DROP TABLE public.paymentmethods;
       public         heap    postgres    false            �            1259    24769 $   paymentmethods_payment_method_id_seq    SEQUENCE     �   CREATE SEQUENCE public.paymentmethods_payment_method_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.paymentmethods_payment_method_id_seq;
       public          postgres    false    229            j           0    0 $   paymentmethods_payment_method_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.paymentmethods_payment_method_id_seq OWNED BY public.paymentmethods.payment_method_id;
          public          postgres    false    228            �            1259    24693    productreviews    TABLE     �   CREATE TABLE public.productreviews (
    review_id integer NOT NULL,
    product_id integer,
    user_id integer,
    rating integer,
    review_text text,
    review_date date
);
 "   DROP TABLE public.productreviews;
       public         heap    postgres    false            �            1259    24692    productreviews_review_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productreviews_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.productreviews_review_id_seq;
       public          postgres    false    219            k           0    0    productreviews_review_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.productreviews_review_id_seq OWNED BY public.productreviews.review_id;
          public          postgres    false    218            �            1259    24684    products    TABLE       CREATE TABLE public.products (
    gift_id integer NOT NULL,
    giftname character varying(100) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    category character varying(50),
    url character varying,
    occasion character varying
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    24683    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    217            l           0    0    products_product_id_seq    SEQUENCE OWNED BY     P   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.gift_id;
          public          postgres    false    216            �            1259    24782    shippingaddresses    TABLE       CREATE TABLE public.shippingaddresses (
    address_id integer NOT NULL,
    user_id integer,
    address character varying(200),
    city character varying(50),
    state character varying(50),
    postal_code character varying(20),
    country character varying(50)
);
 %   DROP TABLE public.shippingaddresses;
       public         heap    postgres    false            �            1259    24781     shippingaddresses_address_id_seq    SEQUENCE     �   CREATE SEQUENCE public.shippingaddresses_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.shippingaddresses_address_id_seq;
       public          postgres    false    231            m           0    0     shippingaddresses_address_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.shippingaddresses_address_id_seq OWNED BY public.shippingaddresses.address_id;
          public          postgres    false    230            �            1259    24671    users    TABLE     v  CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password_hash character varying(100) NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    date_of_birth date,
    address character varying(200),
    phone_number character varying(20)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24670    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    215            n           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    214            �            1259    24741    wishlist    TABLE     X   CREATE TABLE public.wishlist (
    wishlist_id integer NOT NULL,
    user_id integer
);
    DROP TABLE public.wishlist;
       public         heap    postgres    false            �            1259    24740    wishlist_wishlist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wishlist_wishlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.wishlist_wishlist_id_seq;
       public          postgres    false    225            o           0    0    wishlist_wishlist_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.wishlist_wishlist_id_seq OWNED BY public.wishlist.wishlist_id;
          public          postgres    false    224            �            1259    24753    wishlistitems    TABLE     ~   CREATE TABLE public.wishlistitems (
    wishlist_item_id integer NOT NULL,
    wishlist_id integer,
    product_id integer
);
 !   DROP TABLE public.wishlistitems;
       public         heap    postgres    false            �            1259    24752 "   wishlistitems_wishlist_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wishlistitems_wishlist_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.wishlistitems_wishlist_item_id_seq;
       public          postgres    false    227            p           0    0 "   wishlistitems_wishlist_item_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.wishlistitems_wishlist_item_id_seq OWNED BY public.wishlistitems.wishlist_item_id;
          public          postgres    false    226            �           2604    24797    categories category_id    DEFAULT     �   ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
 E   ALTER TABLE public.categories ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    24727    orderitems item_id    DEFAULT     x   ALTER TABLE ONLY public.orderitems ALTER COLUMN item_id SET DEFAULT nextval('public.orderitems_item_id_seq'::regclass);
 A   ALTER TABLE public.orderitems ALTER COLUMN item_id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    24715    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    24773     paymentmethods payment_method_id    DEFAULT     �   ALTER TABLE ONLY public.paymentmethods ALTER COLUMN payment_method_id SET DEFAULT nextval('public.paymentmethods_payment_method_id_seq'::regclass);
 O   ALTER TABLE public.paymentmethods ALTER COLUMN payment_method_id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    24696    productreviews review_id    DEFAULT     �   ALTER TABLE ONLY public.productreviews ALTER COLUMN review_id SET DEFAULT nextval('public.productreviews_review_id_seq'::regclass);
 G   ALTER TABLE public.productreviews ALTER COLUMN review_id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    24687    products gift_id    DEFAULT     w   ALTER TABLE ONLY public.products ALTER COLUMN gift_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 ?   ALTER TABLE public.products ALTER COLUMN gift_id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    24785    shippingaddresses address_id    DEFAULT     �   ALTER TABLE ONLY public.shippingaddresses ALTER COLUMN address_id SET DEFAULT nextval('public.shippingaddresses_address_id_seq'::regclass);
 K   ALTER TABLE public.shippingaddresses ALTER COLUMN address_id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    24674    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    24744    wishlist wishlist_id    DEFAULT     |   ALTER TABLE ONLY public.wishlist ALTER COLUMN wishlist_id SET DEFAULT nextval('public.wishlist_wishlist_id_seq'::regclass);
 C   ALTER TABLE public.wishlist ALTER COLUMN wishlist_id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    24756    wishlistitems wishlist_item_id    DEFAULT     �   ALTER TABLE ONLY public.wishlistitems ALTER COLUMN wishlist_item_id SET DEFAULT nextval('public.wishlistitems_wishlist_item_id_seq'::regclass);
 M   ALTER TABLE public.wishlistitems ALTER COLUMN wishlist_item_id DROP DEFAULT;
       public          postgres    false    227    226    227            `          0    24794 
   categories 
   TABLE DATA           T   COPY public.categories (category_id, category_name, parent_category_id) FROM stdin;
    public          postgres    false    233   k       V          0    24724 
   orderitems 
   TABLE DATA           W   COPY public.orderitems (item_id, order_id, product_id, quantity, subtotal) FROM stdin;
    public          postgres    false    223   ?k       T          0    24712    orders 
   TABLE DATA           M   COPY public.orders (order_id, user_id, order_date, total_amount) FROM stdin;
    public          postgres    false    221   rk       \          0    24770    paymentmethods 
   TABLE DATA           �   COPY public.paymentmethods (payment_method_id, user_id, payment_type, card_number, expiration_date, billing_address) FROM stdin;
    public          postgres    false    229   �k       R          0    24693    productreviews 
   TABLE DATA           j   COPY public.productreviews (review_id, product_id, user_id, rating, review_text, review_date) FROM stdin;
    public          postgres    false    219   !l       P          0    24684    products 
   TABLE DATA           b   COPY public.products (gift_id, giftname, description, price, category, url, occasion) FROM stdin;
    public          postgres    false    217   �l       ^          0    24782    shippingaddresses 
   TABLE DATA           l   COPY public.shippingaddresses (address_id, user_id, address, city, state, postal_code, country) FROM stdin;
    public          postgres    false    231   mn       N          0    24671    users 
   TABLE DATA           �   COPY public.users (user_id, username, email, password_hash, first_name, last_name, date_of_birth, address, phone_number) FROM stdin;
    public          postgres    false    215   �n       X          0    24741    wishlist 
   TABLE DATA           8   COPY public.wishlist (wishlist_id, user_id) FROM stdin;
    public          postgres    false    225   ^q       Z          0    24753    wishlistitems 
   TABLE DATA           R   COPY public.wishlistitems (wishlist_item_id, wishlist_id, product_id) FROM stdin;
    public          postgres    false    227   �q       q           0    0    categories_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categories_category_id_seq', 33, true);
          public          postgres    false    232            r           0    0    orderitems_item_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.orderitems_item_id_seq', 33, true);
          public          postgres    false    222            s           0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 33, true);
          public          postgres    false    220            t           0    0 $   paymentmethods_payment_method_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.paymentmethods_payment_method_id_seq', 33, true);
          public          postgres    false    228            u           0    0    productreviews_review_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.productreviews_review_id_seq', 33, true);
          public          postgres    false    218            v           0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 33, true);
          public          postgres    false    216            w           0    0     shippingaddresses_address_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.shippingaddresses_address_id_seq', 33, true);
          public          postgres    false    230            x           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 59, true);
          public          postgres    false    214            y           0    0    wishlist_wishlist_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.wishlist_wishlist_id_seq', 43, true);
          public          postgres    false    224            z           0    0 "   wishlistitems_wishlist_item_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.wishlistitems_wishlist_item_id_seq', 33, true);
          public          postgres    false    226            �           2606    24799    categories categories_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    233            �           2606    24729    orderitems orderitems_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_pkey PRIMARY KEY (item_id);
 D   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_pkey;
       public            postgres    false    223            �           2606    24717    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    221            �           2606    24775 "   paymentmethods paymentmethods_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.paymentmethods
    ADD CONSTRAINT paymentmethods_pkey PRIMARY KEY (payment_method_id);
 L   ALTER TABLE ONLY public.paymentmethods DROP CONSTRAINT paymentmethods_pkey;
       public            postgres    false    229            �           2606    24700 "   productreviews productreviews_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.productreviews
    ADD CONSTRAINT productreviews_pkey PRIMARY KEY (review_id);
 L   ALTER TABLE ONLY public.productreviews DROP CONSTRAINT productreviews_pkey;
       public            postgres    false    219            �           2606    24691    products products_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (gift_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    217            �           2606    24787 (   shippingaddresses shippingaddresses_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.shippingaddresses
    ADD CONSTRAINT shippingaddresses_pkey PRIMARY KEY (address_id);
 R   ALTER TABLE ONLY public.shippingaddresses DROP CONSTRAINT shippingaddresses_pkey;
       public            postgres    false    231            �           2606    24682    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            �           2606    24678    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    24680    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    215            �           2606    24746    wishlist wishlist_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.wishlist
    ADD CONSTRAINT wishlist_pkey PRIMARY KEY (wishlist_id);
 @   ALTER TABLE ONLY public.wishlist DROP CONSTRAINT wishlist_pkey;
       public            postgres    false    225            �           2606    24758     wishlistitems wishlistitems_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_pkey PRIMARY KEY (wishlist_item_id);
 J   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_pkey;
       public            postgres    false    227            �           2606    24800 -   categories categories_parent_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_parent_category_id_fkey FOREIGN KEY (parent_category_id) REFERENCES public.categories(category_id);
 W   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_parent_category_id_fkey;
       public          postgres    false    233    233    3251            �           2606    24730 #   orderitems orderitems_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);
 M   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_order_id_fkey;
       public          postgres    false    3239    223    221            �           2606    24735 %   orderitems orderitems_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(gift_id);
 O   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_product_id_fkey;
       public          postgres    false    217    223    3235            �           2606    24718    orders orders_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    221    215    3231            �           2606    24776 *   paymentmethods paymentmethods_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.paymentmethods
    ADD CONSTRAINT paymentmethods_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 T   ALTER TABLE ONLY public.paymentmethods DROP CONSTRAINT paymentmethods_user_id_fkey;
       public          postgres    false    229    215    3231            �           2606    24701 -   productreviews productreviews_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productreviews
    ADD CONSTRAINT productreviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(gift_id);
 W   ALTER TABLE ONLY public.productreviews DROP CONSTRAINT productreviews_product_id_fkey;
       public          postgres    false    217    219    3235            �           2606    24706 *   productreviews productreviews_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productreviews
    ADD CONSTRAINT productreviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 T   ALTER TABLE ONLY public.productreviews DROP CONSTRAINT productreviews_user_id_fkey;
       public          postgres    false    3231    215    219            �           2606    24788 0   shippingaddresses shippingaddresses_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.shippingaddresses
    ADD CONSTRAINT shippingaddresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 Z   ALTER TABLE ONLY public.shippingaddresses DROP CONSTRAINT shippingaddresses_user_id_fkey;
       public          postgres    false    215    3231    231            �           2606    24747    wishlist wishlist_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlist
    ADD CONSTRAINT wishlist_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 H   ALTER TABLE ONLY public.wishlist DROP CONSTRAINT wishlist_user_id_fkey;
       public          postgres    false    225    215    3231            �           2606    24764 +   wishlistitems wishlistitems_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(gift_id);
 U   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_product_id_fkey;
       public          postgres    false    3235    217    227            �           2606    24759 ,   wishlistitems wishlistitems_wishlist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_wishlist_id_fkey FOREIGN KEY (wishlist_id) REFERENCES public.wishlist(wishlist_id);
 V   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_wishlist_id_fkey;
       public          postgres    false    227    225    3243            `   +   x�3����MUPS��,I�H����2��J-O�)�qb���� �
/      V   #   x�3�4B#N#S=K.#ķԳ������ Nj�      T   -   x�3�4�4202�50�52�44ҳ��2�4�ZrY�c���� �g�      \   b   x�3�4�t.JM�,QpN,J��B�F�&�FF���F�Ɔ�@��obf�Bp	��g@be@bgVb^�CjEbnAN�^r~.g������kN.He� �P�      R   ^   x�3�4BN�������t����ԜJ������<=N##c]s]#.#N4�tL*��)-�*.)����KW�KM��ILNU�k0������� N��      P   �  x����n�@�������$�!G�KE7n�D�B#GD�Ǵ^;�CUUȍU�qM@�IfކֶzKqvgfg��_�ԁ�'�@��P�t0Og��c4�	½~g0P�Ӊ�O���,85���6���gK;�E�O)G�S���e���T��/(�%�����)N�@�+^�ծ���T�9�^{}u8O&��ߚ��x�.}�}�&�6��k�ٌg_��l��= �ҝ��e_��
����ZcFS�����8j���>�.3�p9�����Yӕ�DNT7�Dz�����@O��B��S��s�IWǡ�{\�I9S#��md!��t�#���+��ƕ{��ɉ�Q���.[⚶�nF�*.5�� �p%藴����L�[`��xCg��Oq� g,��.o�i�M �#����nD���R��2�v���Z�/��N���/�?>����c@��{���� ���z      ^   R   x�3�4�442V�M��S.�t̫,�/��tv	��r�;rqq���)���B��d�)8g�Tr�Er���[X���qqq e�^      N     x��T[o�0~>��<TB���\L�͚vK�nm�i�*U�v��`��-��3&i\���s�|߇�}p�Q��=L��+�K�&"��Ȕ���H�"*��Be��Ju��;�-IV�V5`�^��o��H
v/�N���.,T�t��x�±낏�ќ�{bLC��!&))�Q�q�8�nҿ<Nr���.�Msc_M�E��aذg}���N�~��^�6%R��z����+`g����`ׂ�v �H\����`b��	yc��D쩕�M	�v����RR�^,h�|��(T	��4���Z�e��8�]��4!d�B�:O���Z�o�������D��8+�ݡ��B VrUS��R!B!�ϛ,'�����3U}P����KD���Hw�$�f"r���R�6@�DW�w��:LKd���Rߥ���U;�	�����Y��9����@����~��a�����@n��/����D>��ܬ�(y&�\f�*�񑃎�����]���[)�O��gas}Նۀ��ŏ��e�����aˋ��wK�-�Yk訿ɳ���̧䬝��֝/H��r��g�,EI4%����$p��鹊Wz�V=A8o�Q;�t7�,�7жU      X   0   x�3�4�2�4�26���26�f`Ғ�؄�Ĉ�ؔ��D��qqq ģ�      Z      x�3�4�4�2�4�4����� 
     