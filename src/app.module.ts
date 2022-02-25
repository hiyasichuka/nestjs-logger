import appInsights from 'applicationinsights';
import pino from 'pino';
import { LoggerModule } from 'nestjs-pino';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Create a default streams
const streams: pino.DestinationStream[] = [];

// Start Azure Application Insights.
if (['yes', 'true'].includes(process.env.AZURE_APPINSIGHTS_ENABLED)) {
  // Auto generate trace telemetry for console.log
  appInsights
    .setup(process.env.AZURE_APPINSIGHTS_CONNECTION_STRING)
    .setAutoCollectConsole(true, true)
    .start();

  // Add a stream for console.log
  streams.push({
    // Force all logging to be redirected to console.log
    write: console.log,
  });
}

// Create a mixin.
const mixin = () => ({
  application: process.env.APPLICATION_NAME || 'default',
});

// Create a custom pino instance.
const logger =
  streams.length == 0
    ? pino({ mixin })
    : pino({ mixin }, pino.multistream(streams));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: true,
        logger,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
