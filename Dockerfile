# Use official PHP image with FPM
FROM php:8.2-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    supervisor

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN groupadd -r $user && \
    useradd -r -u $uid -g $user -G www-data,root -d /home/$user $user && \
    mkdir -p /home/$user && \
    chown $user:$user /home/$user

    
# RUN useradd --no-user-group --non-unique --uid $uid --home /home/$user $user
# RUN usermod -aG www-data,root $user
# RUN mkdir -p /home/$user/.composer && \
#     chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Copy PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/conf.d/app.ini

# Install dependencies
RUN composer install --no-interaction --optimize-autoloader --no-dev

# Change owner of the web directory
RUN chown -R $user:www-data /var/www/storage /var/www/bootstrap/cache
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]